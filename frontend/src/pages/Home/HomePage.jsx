
import React, {useContext, useEffect} from "react";
import "./Home.css";
import Navbar2 from "../../components/Navbar/Navbar2";
import home2 from "../../images/home2.jpg";
import home3 from "../../images/home3.jpg";
import Person1 from "../../images/person1.jpg";
import Person2 from "../../images/person2.jpg";
import Person3 from "../../images/person3.jpg";
import Blogcard from "../../components/Cards/Blogcard";
import { NavLink } from "react-router-dom";
import kidbg3 from "../../images/kidbg3.png";
import kidbg4 from "../../images/kidbg4.png";
import kidbg5 from "../../images/kidbg5.png";
import Homecard from "../../components/Cards/Homecard";
import Experts from "../../components/Cards/Experts";
import game1 from "../../images/game1.jpg";
import game2 from "../../images/game2.jpg";
import game3 from "../../images/game3.jpg";
import game4 from "../../images/game4.jpg";
import { useTranslation } from 'react-i18next';
import AuthContext from "../../hooks/AuthContext";

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  const { t } = useTranslation();

  useEffect(() => {
    console.log("Home page state value check : ", isAuthenticated);
  }, []);
  return (
    <div className="home">
      <Navbar2 />
      <div className="homeWrapper">
        {/* main home page content */}
        <section className="homeSection1">
          <h1 className="homeTitle2">{t('homepg.playLearnAdvocate')}</h1>
          <div className="homeText">
            <h1 className="homeTitle">{t('homepg.empoweringKids')}</h1>
            <div className="btn">
              <div className="explore btnhover">
                {t('homepg.startLearning')}
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
          </div>
          <div className="allkids">
            <img src={kidbg5} alt="home img" className="homeimg" />
            <img src={kidbg4} alt="home img" className="homeimg" />
            <img src={kidbg3} alt="home img" className="homeimg" />
          </div>
        </section>
        <div className="imgDiv">{/* <img src={Arrow} alt="" /> */}</div>

        {/* home page cards */}
        <section className="homeSection2">
          <div className="cdWrapper">
            <h1 className="homeTitle">{t('homepg.ourActivities')}</h1>
            <div className="cdWrapper2">
              <Homecard
                name={t('homepg.challenges')}
                ct={"cd6Container1"}
                image={game1}
                text={t('homepg.challengesDescription')}
              />
              <Homecard
                name={t('homepg.modulesAndStories')}
                ct={"cd6Container2"}
                image={game2}
                text={t('homepg.modulesAndStoriesDescription')}
              />
              <Homecard
                name={t('homepg.games')}
                ct={"cd6Container3"}
                image={game4}
                text={t('homepg.gamesDescription')}
              />
              <Homecard
                name={t('homepg.expertsWebinar')}
                ct={"cd6Container4"}
                image={game3}
                text={t('homepg.expertsWebinarDescription')}
              />
            </div>
          </div>
        </section>

        {/* about us */}
        <section className="homeSection3" data-aos="zoom-in">
  <div className="cdWrapper">
    <h1 className="homeTitle">{t('aboutUs')}</h1>
    <div className="cdWrapper3">
      <figure>
        <img src={home2} alt="Thumb" width="400" height="300" />
        <figcaption>
          <div>{t('homepg.startLearning')}</div>
        </figcaption>
      </figure>
      <div className="homeText3">
        <h2>{t('homepg.ourMission')}</h2>
        <p>{t('homepg.missionDescription')}</p>
      </div>
    </div>
  </div>
</section>

{/* activites section */}
<section className="homeSection4">
  <div className="cdWrapper">
    <h1 className="homeTitle">{t('homepg.ourFeatures')}</h1>
    <div className="cdWrapper2">
      <div className="col1">
        <NavLink className="logout-btn" to={"/login"}>
          <div className="cd4" data-aos="zoom-in">
            <h2 className="cd3title">{t('homepg.learningModules')}</h2>
            <p>{t('homepg.learningModulesDescription')}</p>
          </div>
        </NavLink>
        <NavLink className="logout-btn" to={"/login"}>
          <div className="cd4" data-aos="zoom-in">
            <h2 className="cd3title">{t('homepg.games')}</h2>
            <p>{t('homepg.gamesDescription')}</p>
          </div>
        </NavLink>
      </div>
      <div className="col2">
        <img src={home3} alt="home img" className="homeimg3" />
      </div>
      <div className="col3">
        <NavLink className="logout-btn" to={"/event"}>
          <div className="cd4" data-aos="zoom-in">
            <h2 className="cd3title">{t('homepg.specialEvents')}</h2>
            <p>{t('homepg.specialEventsDescription')}</p>
          </div>
        </NavLink>
        <NavLink className="logout-btn" to={"/login"}>
          <div className="cd4" data-aos="zoom-in">
            <h2 className="cd3title">{t('homepg.quizzes')}</h2>
            <p>{t('homepg.quizesDescription')}</p>
          </div>
        </NavLink>
      </div>
    </div>
  </div>
</section>

        {/* blogs section */}
        <section className="homeSection5" data-aos="zoom-in">
          <div className="cdWrapper">
            <h1 className="homeTitle">Blogs</h1>
            <div className="cdWrapper2">
              <Blogcard image={Person2} name={"Priya"} />
              <Blogcard image={Person1} name={"Vighnesh"} />
              <Blogcard image={Person3} name={"Abuzaid"} />
            </div>
          </div>
        </section>

        {/* experts section */}
        <section className="homeSection6" data-aos="zoom-in">
          <div className="cdWrapper">
            <h1 className="homeTitle">Experts</h1>
            <div className="cdWrapper2">
              <Experts
                image={Person2}
                name={"Hardik Bhagat"}
                position={"Child rights activist"}
              />
              <Experts
                image={Person1}
                name={"Vighnesh Adelkar"}
                position={"Philanthropist"}
              />
              <Experts
                image={Person3}
                name={"Abuzaid Ansari"}
                position={"Education"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
