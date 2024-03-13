import {useState, useEffect} from 'react'
import axios from 'axios'

const Login = () => {

  const [data, setData] = useState({
    email : '',
    password : ''
  })

  const loginUser = async (e) =>{
    e.preventDefault()
    try{
      const response=await axios.get('/')
      console.log(response.data)
    }catch(error){
      console.log(error) 
    }
  }


  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type="email" placeholder="enter email..." value={data.email} onChange={((e)=>setData({...data, email : e.target.value}))}/>
        <label>Password</label>
        <input type="password" placeholder="enter password..." value={data.password} onChange={((e)=> setData({...data, password : e.target.value}))}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
