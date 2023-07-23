import mongoose from "mongoose";

const Schema=new mongoose.Schema({
    title:{
        type:String,
        required:true, 
    },
    description:{
        type:String,
        required:true,    
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

    },
    CreatedAt:{
        type:Date,
        default:Date.now(),
    }
});

export const Task=mongoose.model("Task",Schema);
