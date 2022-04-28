// Using Node.js `require()`
const mongoose = require('mongoose');
//connect to database
mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('connected to MongoDb'))
  .catch((err) => console.error('coud not connect to MongoDb', err));

//build course schema
const courseSchema = new mongoose.Schema({
  name: String,
  auther: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
});

//build Course class model
const Course = mongoose.model('Course', courseSchema);

//build course object
const course = new Course({
  name: 'Node.js Course',
  auther: 'bassem',
  tags: ['node', 'backend'],
  isPublished: true,
});
