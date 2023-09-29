import { useContext } from "react";
import "./Navbar2.css";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import img1 from "../../images/logoo.png";
=======
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/AuthContext";
import img1 from "../../images/main-logo.jpg";
>>>>>>> b42e7f326e3e9dcc7eb9d8c1db78204316ef1962
import { useTranslation } from 'react-i18next';


export default function Navbar2() {

    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    const { t } = useTranslation();

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
    <nav className="navbar2" id="mainnav">
<<<<<<< HEAD
      <img src={img1} alt="new" className="logo" />
      <ul className="navbar-links">
        <li>
          <NavLink to="/">{t('Home')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses">{t('Modules')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs">{t('Blogs')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/games">{t('Challenges')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://kodey18.github.io/scramble-game/">{t('Games')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/event">{t('Events')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat">{t('Chat')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/userprofile">{t('Profile')}
            <span></span><span></span><span></span><span></span>
=======
      <img className="logo" src={img1} alt="new" />
      <ul className="navbar-links ">
        <li>
          <NavLink to="/">
            {t("home")}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
>>>>>>> b42e7f326e3e9dcc7eb9d8c1db78204316ef1962
          </NavLink>
        </li>
        {obj && obj.role === 1 ? (
          <>
            <li>
              <NavLink to="/createblog">
                {t("create blog")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                {t("blogs")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/modules">
                {t("modules")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                {t("blogs")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://kodey18.github.io/quiz-game/">
                {t("quiz")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              {/* https://kodey18.github.io/scramble-game/ */}
              <NavLink to="/games">
                {t("games")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/events">
                {t("events")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat">
                {t("chat")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/userprofile">
                {t("profile")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
<<<<<<< HEAD
      <div className="language-dropdown">
        <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
=======

      <div className="language-dropdown">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
>>>>>>> b42e7f326e3e9dcc7eb9d8c1db78204316ef1962
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
<<<<<<< HEAD
      <div className="logoutDiv">
        <>
          <button className="lg-btn">
            <NavLink className="logout-btn" to={"/login"}>
              {t('Login')}
=======

      {/* <div className="logoutDiv">
        <>
          <button className="lg-btn">
            <NavLink className="logout-btn" to={"/userlogin"}>
              {t("Login")}
>>>>>>> b42e7f326e3e9dcc7eb9d8c1db78204316ef1962
            </NavLink>
          </button>
        </>
      </div> */}
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
            <NavLink className="logout-btn" to={"/login"}>
              {t("login")}
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
}