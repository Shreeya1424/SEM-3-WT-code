const express=require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send('Hrllo world')
});
app.listen(3000,()=>{
    console.log('Server Start at 3000');
});