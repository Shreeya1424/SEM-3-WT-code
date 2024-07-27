const http = require('http');
const server=http.createServer((req,res)=>{
    // res.header('content-Type','text/html');
    res.end('Hello World');

    // if(req.url==/"/home"){
    //     res.end('Hello World home');a
    // }


});

 
server.listen(3000,()=>{
console.log("server started at 3000");
});
