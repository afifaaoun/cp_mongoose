const mongoose= require('mongoose');
const dotenv=require('dotenv').config();
const URI=process.env.MONGO_URI;

const connectDB=async()=>{  // assync pour éviter le bloquage des requetes suivantes 
    try{ // si err existe on passe au catch 
        // ContactList nzidouha fl lien
await mongoose.connect(URI,{useNewUrlParser:true, useUnifiedTopology:true})
console.log('connected to database')
    }catch(err){    
        console.log(err)
        }
}


module.exports= connectDB;