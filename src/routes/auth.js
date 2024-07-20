import express from 'express';
import {login, signUp, forgotPassword, resetPassword} from '../controllers/auth.js'

const router = express.Router()

router.post("/login", login)
router.post("/signup", signUp)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password", resetPassword)


export default router