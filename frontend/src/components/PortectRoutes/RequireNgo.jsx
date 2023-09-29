import React, {useEffect} from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireNgo = () => {
    const location = useLocation();
    const obj = JSON.parse(localStorage.getItem('client'));

    useEffect(() => {
        console.log("Require ngo state value check : ", obj);
    }, []);

    return (
        obj && obj.role === 1 
            ? <Outlet /> 
            : <Navigate to='/ngologin' state={{from : location}} replace />
    );
}

export default RequireNgo