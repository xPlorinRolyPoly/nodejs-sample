const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('Hello World');
});

app.get('/api/courses', (req, resp) => {
    resp.send([1,2,3,4]);
});

app.get('/api/courses/:id', (req, resp) => {
    resp.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, resp) => {
    resp.send(req.query);
    //resp.send(req.params);
    //resp.send(`Posts from ${req.params.month}/${req.params.year}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`)
})