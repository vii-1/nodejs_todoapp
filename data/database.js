import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path:"config.env",
});

export const connectDB=()=>{
    console.log(process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"Backendapi"
})
.then((c)=>console.log(`Database connected ${c.connection.host}`));
}