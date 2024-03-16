import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast' 
import Dashboard from './pages/Dashboard'
import { UserContextProvider } from '../context/userContext'
import PrivareRoute from './components/PrivareRoute'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials=true


const App = () => {
  return (
    <div>
      <UserContextProvider>
          <Navbar/>
          <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<PrivareRoute/>}>
              <Route index element={<Dashboard/>}/>
            </Route>
          </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App


