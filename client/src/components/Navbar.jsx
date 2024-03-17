import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext'; // Adjust the import path as necessary
import axios from 'axios';



const Navbar = () => {

  const { user, setIsAuthenticated } = useContext(UserContext);
 const navigate = useNavigate();

 const handleLogout = () => {
    axios.post('/logout')
      .then(() => {
        setIsAuthenticated(false);
        navigate('/login');
      })
      .catch(error => {
        console.error('Failed to log out:', error);
      });
 };


  return (
  
    <nav>
    <Link to="/">Home</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    {user && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
  </nav>
    
  )
}

export default Navbar
