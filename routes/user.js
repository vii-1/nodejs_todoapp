import  express  from "express";
import {getMyprofile, getNew, login, logout } from "../controllers/user.js";
import { isAuthentication } from "../middlewares/auth.js";

const router=express.Router();


router.post("/new",getNew);

router.post("/login",login);
router.get("/logout",logout);


router.get("/me",isAuthentication,getMyprofile);

export default router;
