import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar2 from '../Navbar/Navbar2'
import Footer from '../Footer/Footer';

const Layout = () => {

    const location = useLocation();

    const excludedPaths = [
        '/userlogin',
        '/userregister',
        '/ngologin',
        '/ngoregister'
    ];

    const shouldRender = !excludedPaths.includes(location.pathname);

    return (
        <main>
            {shouldRender && <Navbar2 />}
            <Outlet />
            {/* {shouldRender && <Footer />} */}
        </main>
    )
}

export default Layout