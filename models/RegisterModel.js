

const mongoose = require('mongoose');

const registerSchema =  mongoose.Schema({
    name:{
        type:String,
        unique:true,
    },
    gender:{
        type:String,
    },
    address:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    }
    
})


const register = mongoose.model("Register",registerSchema);
module.exports = register;