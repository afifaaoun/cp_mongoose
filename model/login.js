const mongoose=require('mongoose');

const loginSchema=mongoose.Schema({
    name : String,
    age: Number,
    foods : {
        type : Array,
        items:{
            type : String
        }
    }
})


module.exports= mongoose.model('login', loginSchema)