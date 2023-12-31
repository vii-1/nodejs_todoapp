import {app} from "./app.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";

config({
    path:"config.env",
});


connectDB();



app.listen(process.env.PORT,()=>{
    console.log(`Server is working at ${process.env.PORT} port in ${process.env.NODE_ENV} mode`);
});
