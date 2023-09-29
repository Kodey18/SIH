
import React, { useState } from "react";
import loginimg from "../../images/login-pic2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import "../login Page/Login.css";
import axios from "axios";



const RegisterPage = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : '',
        age : ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try{
          const response = await axios.post('http://localhost:3000/api/users',formData, {withCredentials:true});

          if(response){
            console.log(response.data);
            navigate('/userlogin');
          }
        }catch(err){
          console.error("Error at register user page : ", err);
        }
    };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="imgcol">
          <img src={loginimg} alt="login img" className="login-img" />
        </div>
        <div className="formContainer">
          <h2>Sign Up</h2>
          <form onSubmit={submitHandler} className="loginForm">
            <div className="col-sm-10">
              <input
                type="text"
                className="signupItem"
                id="signupFirstname"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Firstname"
                required
              />
            </div>
            <div className="col-sm-10">
              <input
                type="email"
                className="signupItem"
                id="signupEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="col-sm-10">
              <input
                type="number"
                className="signupItem"
                id="signupAge"
                name="age"
                value={formData.age}
                placeholder="Age"
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-10">
              <input
                type="password"
                className="signupItem"
                id="signupPass"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            <button className="signupSubmit">Sign Up</button>
          </form>
          <p>
            Already have a account{" "}
            <span>
              <NavLink to={"/userlogin"} className="link">
                Sign In
              </NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
