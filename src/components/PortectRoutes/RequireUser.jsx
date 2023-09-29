import React, {useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireUser = () => {

    const location = useLocation();
    const obj = JSON.parse(localStorage.getItem("client"));

    useEffect(() => {
        console.log("Require user state value check : ", obj);
    }, []);

    return (
        obj && obj.role === 0
            ? <Outlet />
            : <Navigate  to='/userlogin' state={{from : location}} replace />
    )
}

export default RequireUser