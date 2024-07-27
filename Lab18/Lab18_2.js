const http = require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{
   // res.Header('content-Type','text/html');
    

    if(req.url=="/home"){
        const data = fs.readFileSync('Lab20-2.html');
        res.end(data);
    }
    else if(req.url=="/about"){
        const data = fs.readFileSync('Lab21-1.html');
        res.end(data);
    }
    else if(req.url=="/my"){
        const data = fs.readFileSync('Lab21-2.html');
        res.end(data);
    }
    else if(req.url=="/self"){
        const data = fs.readFileSync('Lab_22.html');
        res.end(data);
    }
    else if(req.url=="/center"){
        const data = fs.readFileSync('layout for 3 people.html');
        res.end(data);
    }    
    else{
        res.end('Hello World');
    }


});

 
server.listen(3000,()=>{
console.log("server started at 3000");
});
