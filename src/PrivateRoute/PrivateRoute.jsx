import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import toast from 'react-hot-toast';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
const {user,loading}=useContext(AuthContext)
const location = useLocation()

if(loading){
    return <Loading></Loading>
}
if(user&& user?.email){
return children;
}
return (
    <Navigate state={location.pathname} to={'/login'}></Navigate>
)
    
};

export default PrivateRoute;