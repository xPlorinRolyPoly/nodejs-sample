const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const Joi = require('joi');
const logger = require('./logger');
const authenitcate = require('./authenticator');

const app = express();
app.use(express.json());
app.use(logger);
app.use(authenitcate);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, resp) => {
    resp.send('Hello World');
});

app.get('/api/courses', (req, resp) => {
    resp.send(courses);
});

app.get('/api/courses/:id', (req, resp) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with given id is not found");    
    resp.send(course);
});

app.get('/api/posts/:year/:month', (req, resp) => {
    resp.send(req.query);
    //resp.send(req.params);
    //resp.send(`Posts from ${req.params.month}/${req.params.year}`);
});

app.post('/api/courses', (req, res) => {
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    /* if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be minimum 3 characters')
        return;
    } */
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with given id is not found");
    
    const { error } = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with given id is not found");

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);  
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`)
})