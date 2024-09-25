const express = require('express');
const path = require('path');

const app = express();

const middlewareFun=(req,res,next)=>{
    console.log("fun calld");
    next();
};

const loginmiddleware=(req,res,next)=>{
    console.log("login fun calld");
    next();
};

app.get("/hello",middlewareFun,loginmiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,"Lab20-2.html"));
});

app.listen(3000,()=>{
    console.log("Server Start at 3000");
});