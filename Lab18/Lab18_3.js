const http = require('http');
const server=http.createServer((req,res)=>{
   // res.Header('content-Type','text/html');
    
   if(req.url=="/Home"){
    
    const data = fs.readFileSync('Lab20-2.html');
    res.end(data);
}
else if(req.url=="/about"){
    const data = fs.readFileSync('Lab21-1.html');
    res.end(data);
}
    else{
        res.end('Hello World');
    }


});

 
server.listen(3000,()=>{
console.log("server started at 3000");
});