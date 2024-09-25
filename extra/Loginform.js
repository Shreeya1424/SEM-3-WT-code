const express=require('express');
const bodyParser=require('body-parser')
const app=express();
 app.use(express.json());
// app.use(express.urlencoded({extends:true}));

// app.get("/login",(req,res)=>{
//     res.send(`<form action="/login" method="post">
//         <input type="text" name="username" placeholder="username" />
//         <input type="text" name="password" placeholder="password" />
//         <button type="submit">login</button>
//        </form>`);
// })


// app.get('/hello',(req,res)=>{
//     res.send("welcome to my page");
// })
app.post("/name/:id",(req,res)=>{
    let name = req.body;
    res.send("name");
});
app.listen(3000, () => {
    console.log("Server Start at 3000");
});