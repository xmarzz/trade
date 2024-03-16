import {UserModel} from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
import jwt from 'jsonwebtoken'
import axios from 'axios'

const test=(req,res)=>{
    res.json('test is working') 
}

const registerUser =async(req, res)=>{
        try{
            const{name, email, password} = req.body; 
            if(!name){
                return res.json({
                    error : 'name is required'
                })
            }
            if(!password || password.length < 6){
                return res.json({
                    error : 'password required at least 6 char'
                })
            }
            const exist = await UserModel.findOne({email})
            if(exist){
                return res.json({
                    error : 'email is already taken'
                })
            }
            const hashedPassword = await hashPassword(password)
             const user = await UserModel.create({
                name, email, password: hashedPassword
            })

            return res.json(user) 
        }catch(error){
                console.log(error)
                res.status(500).json({error: 'internal server error'})
        }
}


const loginUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ error: 'no user found' });
        }
        const match = await comparePassword(password, user.password);
        if(match){
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) 
                throw err 
                res.cookie('token', token).json(user);
            });
        }
        else if(!match) {
            res.json({error : 'password is incorrect' } );
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getProfile=(req, res)=>{ 
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=>{
            if(err) throw err 
            res.json(user)
        })
    }else{
        res.json(null) 
    }
}


const getStocks=async (req,res)=>{
    const {symbol } = req.query
    const API_KEY=process.env.ALPHA_API

    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
        res.json(response.data)
    }catch(data){
        console.error('failed to fetch',error) 
        res.status(500).json({error :'failed to fetch the data'})
    }

}

export {test, registerUser, loginUser, getProfile, getStocks}


