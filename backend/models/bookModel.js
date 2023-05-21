const mongoose = require("mongoose");


const BookSchema = mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    author:{type:String,required:true},
    price:{type:Number,required:true}
})

const BookModel = mongoose.model("books",BookSchema);

module.exports = {
    BookModel
}