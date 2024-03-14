import express from 'express'
import cors from 'cors'
const router = express.Router() 
import {test, registerUser, loginUser } from '../controllers/authController.js'


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
    )
    
router.get('/',test)
router.post('/register', registerUser)
router.post('/login', loginUser)

    

export {router}