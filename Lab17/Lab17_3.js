const child_process = require('child_process');


child_process.exec("java javaFile.java",(err,stdout,stdin)=>{
    if(err) throw err;
    console.log(stdout);
})