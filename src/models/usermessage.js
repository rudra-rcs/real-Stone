const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({

    name:{

            type:String,
            required:true,
            minLength:3
    },

    email:{
        
            type:String,
            required:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email ID")
                }
            }
    },

    phone:{

        type:Number,
        required:true,
        length:10
        
    },
    message:{

        type:String,
        required:true,
        minLength:3

    },

    Date:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("User",userSchema);

module.exports= User;