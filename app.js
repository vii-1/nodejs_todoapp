import express from "express";
import userRourt from "../NodeAPI/routes/user.js";
import taskRourt from "../NodeAPI/routes/task.js";  
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";


export const app=express();

config({
    path:"./data/config.env",
});



//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))



app.use("/users",userRourt);
app.use("/task",taskRourt); 

app.get("/",(req,res)=>{
    res.send("Connected");
});


//error handling middleware
app.use(errorMiddleware);
