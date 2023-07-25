import mongoose from "mongoose";

import { config } from "dotenv";

config({
    path:"config.env",
});



export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"Backendapi"
})
.then((c)=>console.log(`Database connected ${c.connection.host}`));
}