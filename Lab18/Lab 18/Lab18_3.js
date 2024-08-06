const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // res.Header('content-type','text/html');
    if(req.url=="/home"){
        const data=fs.readFileSync('index.html');
        res.end(data);
    }
    else if(req.url=="/about"){
         const about=fs.readFileSync('about.html');
        res.end(about);
    }
    else if(req.url=="/contact"){
        const contact=fs.readFileSync('contact.html');
        res.end(contact);
    }
    else{
        res.end('hello world');
    }
});
server.listen(4000,()=>{
    console.log('server started at 3000');
})