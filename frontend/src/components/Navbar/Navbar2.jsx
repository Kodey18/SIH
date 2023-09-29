import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import img1 from "../../images/logoo.png";
import { useTranslation } from 'react-i18next';

export default function Navbar2() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { t } = useTranslation();

  return (
    <nav className="navbar2" id="mainnav">
      <img src={img1} alt="new" className="logo" />
      <ul className="navbar-links">
        <li>
          <NavLink to="/">{t('Home')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses">{t('Videos')}
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
          </NavLink>
        </li>
      </ul>
      <div className="language-dropdown">
        <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      <div className="logoutDiv">
        <>
          <button className="lg-btn">
            <NavLink className="logout-btn" to={"/login"}>
              {t('Login')}
            </NavLink>
          </button>
        </>
      </div>
    </nav>
  );
}
