import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthentication=async(req,res,next)=>{
    const {token} = req.cookies;

    // console.log(token);
    if(!token)return res.status(404).json({
        success:false,
        message:"Login first"
    })

    const decode=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decode._id);
    next();
};