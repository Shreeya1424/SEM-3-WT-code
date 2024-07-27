const fs = require('fs');

// fs.exists("index.html",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file not found");
//     }
// })


// data = fs.readFileSync("index.html");
// console.log(data.toString());

// fs.readFile("index.html",(err,data)=>{ 
//     console.log(data.toString());
// })

// fs.writeFile("index.html","Darshan University",(err,data)=>{
//         console.log("file succesfully competed");
// })

// fs.appendFile("index.html","Darshan University",(err,data)=>{
//             console.log("file succesfully competed");
// })            


// unlink

// fs.unlink("index.html",(err,data)=>{
//                 console.log("file delete succesfully");
// })



// rename
// fs.rename("abc.txt","index.txt",(err)=>{
//     console.log("rename succesfully");
// })


// status

// const data=fs.stat("index.html",()=>{
    
//         console.log(data);
   
// })
fs.stat("index.html",(err)=>{
    if(err){
        console.log(err);
    }
})