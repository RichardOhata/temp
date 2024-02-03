
const User = require("../models/user.js");

const getUser = ()=>{
    return (req,res,next)=>{
        try{
            User.findOne({"_id":req.params.id})
                .then(result=>{
                    res.json(result);
             });
        } catch (error){
            res.status(500).send(error);
        }
    }
};

const createUser = ()=>{
    return (req,res,next)=>{
        try{
            User.save()
                .then(result=>{
                    res.json(result);
                });
        } catch (error){
            res.status(500).send(error);
        }
    }
};

module.exports = {
    createUser,
    getUser
}