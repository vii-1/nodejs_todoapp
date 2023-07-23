import mongoose from "mongoose";

const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true, 
    },
    email:{
        type:String,
        unique:true,
        required:true,    
    },
    password:{
        type:String,
        select:false,
        required:true,
    },
    CreatedAt:{
        type:Date,
        default:Date.now(),
    }
});

export const User=mongoose.model("User",Schema);
