const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB..'))
    .catch(err => console.error('Could not connect to MongoDB..', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// Classes, Objects --> John is object of class Human
// Course , nodeCourse --> compile schema into Model to get Course, once Model is created nodeCourse can b created

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: [ 'angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}
//createCourse();

async function getCourses() {
    const result = await Course
                            // Logical expression
                            //.find()
                            //.or([{author: 'Mosh'}, {isPublished: true}])
                            //.and([{}, {}])

                            // Starts with Mosh
                            //.find({author: '/^Mosh/'})

                            // Ends with Hichkok
                            //.find({ author: '/Hichkok$/' })

                            // Contains Mosh with case insensitive
                            //.find({author: '/.*Mosh.*/'})

                            .find({ author: 'Mosh', isPublished: true })
                            .limit(10)
                            .sort({ name: 1 })
                            //.sort({ name: -1 }) // sort in reverse order of name
                            //.select({ name: 1, tags: 1})  // --> to display specific fields
                            .count();
    console.log(result);
}

getCourses();