import { useContext } from "react";
import "./Navbar2.css";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/AuthContext";


export default function Navbar2() {

  const obj = JSON.parse(localStorage.getItem('client'));
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = async(e) => {
    e.preventDefault();

    try{
      const response = await logout();

      if(response){
        console.log("logged out : ",response.data);
        navigate('/userlogin');
      }

    } catch(error){
      console.log("error after logout : ",error);
    }
  }

  return (
    <nav className="navbar2">
      <ul className="navbar-links">
        <li>
          <NavLink to="/">
            Home
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        {obj && obj.role === 1 ? (
          <>
            <li>
              <NavLink to="/createblog">create Blog</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/courses">
                Courses
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://kodey18.github.io/quiz-game/">
                Quiz
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://kodey18.github.io/scramble-game/">
                Games
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/event">
            Events
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs">
            Blogs
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat">
            Chat
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/userprofile">
            Profile
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
      </ul>
      <div className="logoutDiv">
        {obj ? (
          <button className="lg-btn" onClick={(e) => handlelogout(e)}>
            <NavLink className="logout-btn">Logout</NavLink>
          </button>
        ) : (
          <button className="lg-btn">
            <NavLink className="logout-btn" to="/userlogin">
              Login
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
}