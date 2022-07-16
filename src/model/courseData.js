const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/CourseDB?retryWrites=true&w=majority')
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    courseTitle:String,
    courseDescription:String,
    courseDuration:String,
    courseDate:String,
    courseVenue:String
});
var CourseData = mongoose.model("courseset",CourseSchema);
module.exports = CourseData;