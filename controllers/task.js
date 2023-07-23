import ErrorHandler from "../middlewares/error.js";
import {Task} from "../models/task.js"

export const Newtask=async(req,res,next)=>{
    try {
    const {title,description} =req.body;

    await Task.create({
        title,description,
        user:req.user,
    });
    
    res.status(201).json({
        success:true,
        message:"Task added succesfully",
    });
        
    } catch (error) {
        next(error);
    }
    
};

export const getMytask = async(req,res,next)=>{

    try {
        const userid=req.user._id;

        const tasks=await Task.find({user:userid});
    
        res.status(200).json({
            success:true,
            tasks,
        });
    } catch (error) {
        next(error);
    }
   
};

export const updatetask = async(req,res,next)=>{
    try {
        const {id}=req.params;

        const task=await Task.findById(id);
        if(!task) return next(new Error("Error occured")); 
    
    
        
        task.isCompleted=! task.isCompleted;
        await task.save();
        res.status(200).json({
            success:true,
            message:"Task updated"
    
        });
        
    } catch (error) {
        next(error);
    }
   
};

export const deletetask = async(req,res,next)=>{
    try {
         const {id}=req.params;

    const task=await Task.findById(id);
    if(!task) return next(new ErrorHandler("Invalid id",404)); 

    await task.deleteOne();
    res.status(200).json({
        success:true,
        message:"Task deleted !!"           
     });
    } 
    catch (error) {
        next(error);
    }
   
};