import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectRoutes = () => {
    const location = useLocation();
    const obj = JSON.parse(localStorage.getItem('client'));

    useEffect(()=>{
        console.log('Protect route state value check : ',obj);
    }, []);


    return (
        obj
            ? <Navigate  to='/' state={{from : location}} replace />
            : <Outlet />
    );
}

export default ProtectRoutes