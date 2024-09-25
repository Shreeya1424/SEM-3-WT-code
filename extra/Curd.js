const express = require('express');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.json())

const student = [

    {
        "id": 1,
        "name": "Shreeya",
        "age": 19
    },
    {
        "id": 2,
        "name": "Shree",
        "age": 17
    }
];
//read
//get by all
app.get("/student", (req, res) => {
    res.send(student);
});

//get byid
app.get("/student/:id", (req, res) => {
    const ans = student.find(student => student.id == req.params.id);
    res.send(ans);
});

//create
app.use(bodyParse.urlencoded());
app.put("/student", (req, res) => {
    student.push(req.body);
    res.send("new student is pushed");
});

//update
app.put("/student/:id", (req, res) => {
    const ans = student.find((student) => {
        if (student.id == req.params.id) {
            return true;
        }
    });
    res.send(ans + "student is patched");
});

//idtoedit
// app.patch("/student/:id",(req,res)=>{
//     const idtoedit = student.find((student)=>{
//         if(student.id==req.params.id){
//             return true;
//         }
//     });    student[ans]=req.body;
//     res.send("id is edited");
// });

//delete
app.delete("/student/:id", (req, res) => {
    const ans = student.find((student) => {
        if (student.id == req.params.id) {
            return true;
        }
    });
    student.splice = req.body;
    res.send("id deleted");
});


app.listen(3000, () => {
    console.log("Server Start at 3000");
});