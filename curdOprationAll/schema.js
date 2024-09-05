const mongoose= require('mongoose');
const schema =require('Schema');

const schema=mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    age:Number,

});

modual.express = mongoose.model;

mongoose.connect("mongodb+srv://Shreeya:asdfghjkl1424@cluster0.goca6.mongodb.net/").then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err);
});

app.listen(3000, () => {
    console.log("Server Start at 3000");
});