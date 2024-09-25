const mongoose= require('mongoose');
const schema=mongoose.Schema({
    // id:Number,
    // name:String,
    // email:String,
    // age:Number,
    FacultyID:Number,
    FacultyName:String,
    FacultyDesignation:String,
    FacultyEducationQualification:String,
    FacultyExperience:Number,
    FacultyWorkingSince:String,

});
module.exports = mongoose.model("faculty",schema);