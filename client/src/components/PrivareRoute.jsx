import React, { useContext } from 'react';
import { Route, Navigate,Outlet } from 'react-router-dom';
import { UserContext } from '../../context/userContext'; 

const PrivateRoute = () => {
 const { isAuthenticated } = useContext(UserContext);

 return (
    <div>
       {isAuthenticated ? <Outlet/> : <Navigate to="/login" />}
       </div> 
 );
};

export default PrivateRoute;
