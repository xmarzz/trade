import {useState} from 'react'


const Register = () => {

  const [data, setData]=useState({
    name:'',
    email:'',
    password:'' 
  })

  const registerUser=(e)=>{
    e.preventDefault() 

  }
  return (
    <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" placeholder="enter name..." value={data.name} onChange={((e)=> setData({...data, name: e.target.value}))} />
        <label>email</label>
        <input type="email" placeholder="enter email..." value={data.email} onChange={((e) => setData({...data, email : e.target.value}))}/>
        <label>Password</label>
        <input type="password" placeholder="enter password..." value={data.password} onChange={((e)=>setData({...data, password: e.target.value }))} /> 
        <button type="text">Submit</button>
    </form>
  )
}

export default Register
