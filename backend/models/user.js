const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        maxLength:50,
        required:true
    },
    email:{
        type:String,
        maxLength:50,
        required:true
    },
    age:{
        type:Number,
        min:10,
        max:150,
        required:true
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;