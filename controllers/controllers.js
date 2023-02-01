
const loginSchema= require('../model/login');

//find user
exports.GetContact = async(req,res)=>{
    try{
        const getContact= await loginSchema.find({},{_id:true});
        // const getContact= await loginSchema.find({name:"seif"}); // requette statique

        res.status(200).send({message:"this is all the contact",getContact});
    }
    catch(err){
        res.status(500).send("cannot get contacts")
    }
}

//create user
exports.CreateContact=async(req,res)=>{
    try{
        const addUser = await new loginSchema(req.body) // pour remplir : name, age, foods
        // const addUser= await new loginSchema({name:"hedi",age:55,foods:["couscous"]}) // requette statique
        addUser.save(); // pour l'enregistrement au database 
        res.status(200).json({'success': true,'result':addUser});
    }

    catch{
        res.status(500).send("cannot add a new contact")
    }
    
}

//update user
exports.userUpdate=async(req,res)=>{
try{
    const {id} =req.params;
    // role de await : la req mongodb prend du temps du coup on ajoute l await si nn il va passer direct au res.status(500)

    // const updated = await contactSchema.findByIdAndUpdate(id, {$set:{name:'jack'}}); // requette statique

    res.status(200).json({'sucess':true,updated})
}
catch(err){
    res.status(500).json({'cannot update this user':true})
}
}
//delete user
exports.userDelete= async(req,res)=>{
    try{
        const {id} =req.params;
        const deleted = await loginSchema.findByIdAndRemove(id);
        // const deleted = await loginSchema.findByIdAndRemove(id); // requette statique
        res.status(200).json({'sucess':true,deleted})
    }
    catch(err){
        res.status(500).json({'cannot delete this user':true})
    }
}

//delete all
exports.userDeleteAll= async(req,res)=>{
    try{
        const deletedMany = await loginSchema.deleteMany();
        res.status(200).json({'sucess':true,deletedMany})
    }
    catch(err){
        res.status(500).json({'cannot delete all users':true})
    }
}
