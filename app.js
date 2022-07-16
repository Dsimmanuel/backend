const express=require("express");
const CourseData = require('./src/model/courseData')
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//courseList=[
//{
//     "courseTitle":"React",
//     "courseDescription":"React Course",
//     "courseDuration":"4 months",
//     "courseDate":"2022-05-06",
//     "courseVenue":"ONLINE"
// },
// {
//     "courseTitle":"Angular",
//     "courseDescription":"Angular course",
//     "courseDuration":"3 months",
//     "courseDate":"2021-07-04",
//     "courseVenue":"OFFLINE"
// },
// {
//     "courseTitle":"NODE JS",
//     "courseDescription":"NODE JS course",
//     "courseDuration":"2 months",
//     "courseDate":"2020-04-06",
//     "courseVenue":"ICT Academy"
// },
// {
//     "courseTitle":"Express js",
//     "courseDescription":"Express js course",
//     "courseDuration":"6 months",
//     "courseDate":"2023-09-01",
//     "courseVenue":"Z Academy"
// }
//]
// app.get('/getcourses',function(req,res){
// res.send(courseList);
// })




app.get('/getcourses',function(req,res){
    CourseData.find().then(function(courses){
        console.log(courses);
        res.send(courses);
    })
})
// app.post('/addcourse',function(req,res){
//     console.log(req.body);
//     courseList.push(req.body);
//     res.send(courseList);
// })



app.post('/addcourses',function(req,res){
    var item = {
        courseTitle:req.body.courseTitle,
        courseDescription:req.body.courseDescription,
        courseVenue:req.body.courseVenue,
        courseDuration:req.body.courseDuration,
        courseDate:req.body.courseDate
    }
    var course =CourseData(item);
    course.save();
    CourseData.find().then(function(course){
        res.send(course);
    })
})

app.put('/update/:id',function(req,res){
    const id = req.params.id,
    courseTitle=req.body.courseTitle,
    courseDescription=req.body.courseDescription,
    courseVenue=req.body.courseVenue,
    courseDuration=req.body.courseDuration,
    courseDate=req.body.courseDate

    CourseData.findByIdAndUpdate({"_id":id},
    {$set:{"courseTitle":courseTitle,
    "courseDescription":courseDescription,
    "courseVenue":courseVenue,
    "courseDuration":courseDuration,
    "courseDate":courseDate
}}).then(function(){res.send("Updated")});
})

app.delete('/delete/:id',function(req,res){
    const id=req.params.id;
    courseDate.findByIdAndDelete(id,function(){
        res.send("Deleted")
    })
})
app.listen(5000);
