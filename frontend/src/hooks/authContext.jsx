import React, { createContext, useState } from 'react'
import axios from 'axios';

export const AuthContext = createContext();

export function AuthContextProvider({children}){

    const storedUser = localStorage.getItem('client');
    const initailUserState = storedUser ? JSON.parse(storedUser) : null;
    const [lclient, setlclient] = useState(initailUserState);

    const login = async(p, formData) => {
        let path;
        if(p === 0){
            path = `http://localhost:3000/api/users/auth`;
        } else if(p === 1){
            path = `http://localhost:3000/api/ngo/auth`;
        }

        try {
            const response = await axios.post(path, formData, {
                withCredentials: true,
            });
            
            if (response.status === 200) {
                console.log("authenticated successfully from authcontext login.");
                localStorage.setItem('client',JSON.stringify(response.data));
                setlclient(response.data);
                console.log(
                    "client set in local storage from login is : ",
                    JSON.parse(localStorage.getItem("client"))
                );
                return response;
            }
        } catch (error) {
            if (!error.response) {
                console.log(error);
            } else {
                console.log("here1");
                console.log(error.response.data);
            }
        }
    }

    const logout = async() => {
        console.log('here1');
        let path;
        if (lclient.role === 0 || lclient.role === "0") {
                path = `/api/users/logout`;
        } else {
            path = `/api/ngo/logout`;
        }

        try {
            console.log("here2");
            const res = await axios.post(path, { withCredentials: true });
            console.log('logout from the authcontext : ',res.data);
            if(res.status === 201){
                localStorage.removeItem('client');
                setlclient(null);
                return res;
            }
        } catch (err) {
            console.log("here3");
            console.log(err);
        }
    }


    const contextVlaue = {
        setlclient,
        lclient,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={contextVlaue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext