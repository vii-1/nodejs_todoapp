import  express  from "express";
import { Newtask,deletetask,getMytask, updatetask} from "../controllers/task.js";
import { isAuthentication } from "../middlewares/auth.js";

const router =express.Router();

router.post("/new",isAuthentication,Newtask);

router.get("/my",isAuthentication,getMytask);

router.route("/:id").put(isAuthentication,updatetask).delete(isAuthentication,deletetask);

export default router;