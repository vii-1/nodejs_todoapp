import mongoose from "mongoose";
export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"Backendapi"
})
.then(()=>console.log("Database connected"));
}