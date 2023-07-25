import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path:"config.env",
});

export const connectDB=()=>{
    console.log(process.env.MONGO_URI);
    mongoose.connect("mongodb://new-user:newuser@ac-yowlkmi-shard-00-00.cvmqgmz.mongodb.net:27017,ac-yowlkmi-shard-00-01.cvmqgmz.mongodb.net:27017,ac-yowlkmi-shard-00-02.cvmqgmz.mongodb.net:27017/?ssl=true&replicaSet=atlas-hv9lyw-shard-0&authSource=admin&retryWrites=true&w=majority",{
    dbName:"Backendapi"
})
.then((c)=>console.log(`Database connected ${c.connection.host}`));
}