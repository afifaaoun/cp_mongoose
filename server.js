const express=require('express');
const connectDB = require('./config/connectDB');
const contactRouter = require('./routes/login');
const app= express();
const port=5002;

app.use(express.json()); // les fichiers sont de formats json 'Javascript Object Notation' cad attribut : valeur
app.use('/api/person',contactRouter) // le nom de path est au choix 

connectDB()


// to run server

app.listen(port,(err)=>{
    err? 
    console.error(err)
    :
    console.log(`server running in success in port: ${port}`)
})
