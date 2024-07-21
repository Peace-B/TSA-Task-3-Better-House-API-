import express from 'express';
import {login, signUp, forgotPassword, resetPassword} from '../controllers/auth.js'
import { deleteUser, getAllUsers, getOneUser, updateUser, updateUserRole } from '../controllers/user.js';
import { isLoggedIn } from "../middlewares/auth.js"

const router = express.Router()

router.post("/login", login)
router.post("/signup", signUp)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password", resetPassword)
router.get("/all", getAllUsers)
router.get("/:userId", getOneUser)
router.put("/update", isLoggedIn, updateUser)
router.delete("/delete/:userId", deleteUser)
router.post("/user/role", isLoggedIn, updateUserRole)


export default router