const express = require('express');
const { GetContact, CreateContact, userUpdate, userDelete, userDeleteAll } = require('../controllers/controllers');
const contactRouter = express.Router(); // pour pouvoir utiliser l post et get..

// get all user puisque req kenet .find()
contactRouter.get('/',GetContact);

// post new contact
contactRouter.post('/',CreateContact);

//update contact
contactRouter.put('/:id',userUpdate);

//delete contact
contactRouter.delete('/:id',userDelete);

//delete all contact
contactRouter.delete('/',userDeleteAll);

module.exports= contactRouter