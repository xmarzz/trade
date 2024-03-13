import {mongoose} from 'mongoose' 

const {Schema} = mongoose 

const userSchema = new Schema({
    name : String,
    email :{
        type : String,
        unique : true 
    },
    password : String 
})


const UserModel = mongoose.model('User', userSchema) 

export {UserModel} 
