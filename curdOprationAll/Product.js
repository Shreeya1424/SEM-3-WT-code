const mongoose= require('mongoose');
const schema=mongoose.Schema({
    ID:Number,
    ProductName:String,
    ProductPrice:Number,

});
module.exports = mongoose.model("Product",schema);