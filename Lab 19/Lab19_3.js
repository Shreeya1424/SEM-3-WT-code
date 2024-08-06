const express=require('express');
const path = require('path');
const app = express();
app.get("/",(req,res)=>{
    res.send('Hrllo world')
});
    app.get("/home",(req,res)=>{ 
    res.sendFile(path.join(__dirname,"Lab20-2.html"));
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"Lab21-1.html"));
});
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"Lab21-2.html"));
});

app.listen(3000,()=>{
    console.log('Server Start at 3000');
});