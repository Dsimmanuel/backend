const express=require("express");
const app =express();
courseList=[{
    "courseTitle":"React",
    "courseDescription":"React Course",
    "courseDuration":"4 months",
    "courseDate":"2022-05-06",
    "courseVenue":"ONLINE"
},
{
    "courseTitle":"Angular",
    "courseDescription":"Angular course",
    "courseDuration":"3 months",
    "courseDate":"2021-07-04",
    "courseVenue":"OFFLINE"
},
{
    "courseTitle":"NODE JS",
    "courseDescription":"NODE JS course",
    "courseDuration":"2 months",
    "courseDate":"2020-04-06",
    "courseVenue":"ICT Academy"
},
{
    "courseTitle":"Express js",
    "courseDescription":"Express js course",
    "courseDuration":"6 months",
    "courseDate":"2023-09-01",
    "courseVenue":"Z Academy"
}
]
app.get('/getcourses',function(req,res){
res.send(courseList);
})
app.listen(3000);
app.post('/addcourse',function(req,res){
    console.log(req.body);
    courseList.push(req.body);
    res.send(courseList);
})
app.listen(3000);
