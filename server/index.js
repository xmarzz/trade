import  express  from "express"
import dotenv from 'dotenv'
import cors from 'cors' 
dotenv.config()

const app = express()
app.use(cors) 
const PORT=8000

app.listen(PORT, ()=> console.log(`app is listening to ${PORT}`))



