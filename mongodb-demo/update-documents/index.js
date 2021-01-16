const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB..'))
    .catch(err => console.error('Could not connect to MongoDB..', err));

const courseSchema = new mongoose.Schema({
    _id: String,
    name: String,
    author: String, 
    tags: [ String ],
    date: Date, 
    isPublished: Boolean,
    price: Number
});

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

async function getCourses() {
    const result = await Course
                            .find({ author: 'Mosh', isPublished: true })
                            .limit(10)
                            .sort({ name: 1 });
    console.log(result);
}

//getCourses();

/*
    2 approaches for Updating Document
    1. Query First - findById() then Modify its properties and then save()
    2. Update First - Update directly and optionally get the updated document.
*/

// Query First approach
/* async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;
    course.isPublished = true;
    course.author = 'Another Author';
    //  course.set({
    //     isPublished: true,
    //     author: 'Another Author'
    // }); 
    const result = await course.save();
    console.log(result);
} */

// Update First approach
/* async function updateCourse(id) {
    const result = await Course.updateOne({_id: id}, {
        $set: {
            author: 'Mosh',
            isPublished: false
        }
    });
    console.log(result);
} */

// Update First approach
async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Jason',
            isPublished: false
        }
    }, { new: true })
    console.log(course);
}

updateCourse("5a68fdf95db93f6477053ddd");