const mongoose= require('mongoose');

const express=require('express');

const student=require("./faculty");

const bodyParser=require('body-parser');



const connectionString="mongodb+srv://Shreeya:asdfghjkl1424@cluster0.goca6.mongodb.net/";
   mongoose.connect(connectionString).then(()=>{
    console.log("coneected with cloudDB");


    const app=express();
 app.use(bodyParser.json());




//get all
app.get('/faculties',async(req,res)=>{
    const ans =await student.find();
    res.send(ans);
});



//getById
app.get('/faculties/:FacultyID',async(req,res)=>{
    const ans =await student.findOne({id:req.params.id});
    res.send(ans);
});



//create
app.post('/faculties',async(req,res)=>{
    stu=new student({...req.body});
    const ans =await stu.save();
    res.send(ans);
});



//update
app.patch('/faculties/:FacultyID',async(req,res)=>{
    const stu=await student.findOne({id:req.params.id});
    stu.name=req.body.name;
    const ans =await stu.save();
    res.send(ans);
});




//delete
app.delete('/faculties/:FacultyID',async(req,res)=>{
    const ans =await student.deleteOne({id:req.params.id});
    // ans.deleteOne();
    // await stu.save();
    res.send(ans);
});

  


   app.listen(1000, () => {
    console.log("Server Start at 1000");
});



});






