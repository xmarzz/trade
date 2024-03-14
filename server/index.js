import  express  from "express"
import dotenv from 'dotenv'
import {router} from './routes/auth.js'
import {mongoose} from 'mongoose' 
import cookieParser from 'cookie-parser'
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('database connected'))
.catch((err) => console.log('database not connected'))

const app = express()
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/',  router) 

const PORT=8000


app.listen(PORT, ()=> console.log(`app is listening to ${PORT}`))



