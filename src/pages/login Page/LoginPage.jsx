import React, { useContext, useState } from "react";
import AuthContext from "../../hooks/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";
import loginimg from "../../images/login-pic2.jpg";
import "./Login.css";

const LoginPage = () => {

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    // Define state variables to hold form input values
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle input changes and update formData state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await login(0,formData);

            if(response){
                console.log('response at login page : ',response.data); 
                navigate('/');
            }
        }catch(err){
            console.log('error at the login page : ',err);
        }
    };

    return (

    <div className="loginContainer">
    <div className="loginWrapper">
    <div className="imgcol">
        <img src={loginimg} alt="login img" className="login-img" />
    </div>
    <div className="formContainer">
        <div>
        <h2>Welcome Back!! SIGN UP</h2>
        </div>
        <hr></hr>
        <form onSubmit={(e) => handleSubmit(e)} className="loginForm">
        <div className="col-sm-10">
            <input
            type="email"
            className="signupItem"
            id="signupEmail"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            />
        </div>

        <div className="col-sm-10">
            <input
            type="password"
            className="signupItem"
            id="signupPass"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleInputChange}
            required
            />
        </div>

        <button className="signupSubmit" type="submit">Sign Up</button>
        </form>
        <p>Dont have an account? <span ><NavLink to={"/userregister"} className="link">Sign Up</NavLink></span></p> 
    </div>
    </div>
    </div>
    );
};

export default LoginPage;

