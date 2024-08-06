const express=require('express');
const path = require('path');
const app = express();
// app.method(path,handler);
    app.get("/home/",(req,res)=>{ 
    res.send('Welcome Home');
});
app.get("/about",(req,res)=>{
    res.send('Everyone about for darshan university');
});
app.get("/content",(req,res)=>{
    res.send('give me my content');
});
app.get("/service",(req,res)=>{
    res.send('i hope you like my service');
});
app.get("/bye",(req,res)=>{
    res.send('Bye Bye');
});
app.listen(3000,()=>{
    console.log('Server Start at 3000');
});