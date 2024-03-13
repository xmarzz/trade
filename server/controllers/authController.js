import {UserModel} from '../models/user.js'

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

             const user = await UserModel.create({
                name, email, password
            })

            return res.json(user) 
        }catch(error){
                console.log(error)
                res.status(500).json({error: 'internal server error'})
        }

}


export {test, registerUser}