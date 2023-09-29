import React, { useState } from "react";
import loginimg from "../../images/login-pic2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import "../login Page/Login.css";
import axios from "axios";

const NgoRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post("http://localhost:3000/api/ngo", formData, {withCredentials : true});

        if (response) {
            console.log(response.data);
            navigate("/ngologin");
        }
        } catch (err) {
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
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                </div>
                <div className="col-sm-10">
                <input
                    type="email"
                    className="signupItem"
                    id="signupEmail"
                    name="email"
                    value={email}
                    onChange={handleChange}
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
                    value={password}
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
                <NavLink to={"/ngologin"} className="link">
                    Sign In
                </NavLink>
                </span>
            </p>
            </div>
        </div>
        </div>
    );
};

export default NgoRegister;
