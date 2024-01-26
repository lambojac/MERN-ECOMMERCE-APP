import express from "express"
import {registerController} from "../controllers/authController.js"
import { loginController } from "../controllers/authController.js"
import { testController } from "../controllers/authController.js"
import { requireSignIn } from "../middlewares/authMiddleware.js"
//router object
const router=express.Router()

//routing 
//REGISTER ||METHOD POST
router.post("/register",registerController)
//login ||method post
router.post("/login",loginController)
//test routes
router.get("/test",requireSignIn,testController)

export default router