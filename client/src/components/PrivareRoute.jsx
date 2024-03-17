import React, { useContext, useEffect } from 'react';
import { Route, Navigate,Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext'; 
import toast from 'react-hot-toast';

const PrivateRoute = () => {
 const { isAuthenticated } = useContext(UserContext);

 useEffect(()=>{
   if(!isAuthenticated){
      toast.error('please log in first')
   }
 },[isAuthenticated])

 return (
    <div>
       {isAuthenticated ? <Outlet/> : <Navigate to="/login" />}
       </div> 
 );
};

export default PrivateRoute;
