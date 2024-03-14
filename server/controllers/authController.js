import {UserModel} from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
// import jwt from 'jsonwebtoken'

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
        if (match) {
            return res.json('password is correct' );
        }
        // jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
        //     if (err) {
        //         console.error(err);
        //         return res.status(500).json({ error: 'internal server error' });
        //     }
        //     res.cookie('token', token).json(user);
        // });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



export {test, registerUser, loginUser}
