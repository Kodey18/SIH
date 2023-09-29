
import React ,{ useContext, useEffect} from "react";
import "./Home.css";
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

import AuthContext from "../../hooks/AuthContext";




export default function Home() {
    const { lclient } = useContext(AuthContext);
    const obj = JSON.parse(localStorage.getItem('client'));

  useEffect(()=>{
    console.log("Home page state value check : lclient ",lclient);
    console.log("Home page state value check :",obj);
  },[]);

  return (
    <div className="home">
      <div className="homeWrapper">
        {/* main home page content */}
        <section className="homeSection1">
          <h1 className="homeTitle2">Play, Learn, and Advocate.</h1>

          {/* <video autoPlay loop muted id="background-video">

        {/* <video autoPlay loop muted id="background-video">

        <source src={videobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
          {/* <img src={animImg1} alt="home img" className="animImg1" /> */}
          <div className="homeText">
            {/* <h2>Best way to learn from anywhere.</h2> */}
            <h1 className="homeTitle">Empowering Kids </h1>
            <h1 className="homeTitle">for a Just Tomorrow! </h1>

            {/* <p>
              A global knowlege platform for kids between 8-16 to make them
              aware of their rights.
            </p> */}
            <div className="btn">
              <div className="explore btnhover">
                Start Learning
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          {/* <div className="imgDiv"> */}
          {/* <img src={Img1} alt="home img" className="homeimg" /> */}

          {/* </div> */}
          <div className="allkids">
            <img src={kidbg5} alt="home img" className="homeimg" />
            <img src={kidbg4} alt="home img" className="homeimg" />
            <img src={kidbg3} alt="home img" className="homeimg" />
          </div>
          {/* <img src={animImg2} alt="home img" className="animImg2" /> */}
        </section>
        <div className="imgDiv">{/* <img src={Arrow} alt="" /> */}</div>

        {/* home page cards */}
        <section className="homeSection2">
          <div className="cdWrapper">
            <h1 className="homeTitle">Our Activies</h1>

            <div className="cdWrapper2">
              <Homecard
                name={"Challenges"}
                ct={"cd6Container1"}
                image={game1}
                text="Word Scramble, Quiz , Memory-Game and others"
              />
              <Homecard
                name={"Modules and Stories"}
                ct={"cd6Container2"}
                image={game2}
                text="Learning along with visuals and stories"
              />
              <Homecard
                name={"3D Games"}
                ct={"cd6Container3"}
                image={game4}
                text="Interactive 3d gameplay based-on real-life scenarios"
              />
              <Homecard
                name={"Experts Webinar"}
                ct={"cd6Container4"}
                image={game3}
                text="Get lessons from experts and chat with them "
              />
            </div>
          </div>
        </section>

        {/* about us */}
        <section className="homeSection3" data-aos="zoom-in">
          <div className="cdWrapper">
            <h1 className="homeTitle">About Us</h1>
            <div className="cdWrapper3">
              <div className="imgDiv">
                <img src={home2} alt="home img" className="homeimg" />
              </div>
              <div className="homeText3">
                <h2>Our Mission</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* activites section */}
        <section className="homeSection4">
          <div className="cdWrapper">
            <h1 className="homeTitle">Our Activites</h1>
            <div className="cdWrapper2">
              <div className="col1">
                <NavLink className="logout-btn" to={"/login"}>
                  <div className="cd4" data-aos="zoom-in">
                    <h2 className="cd3title">Learning Modules</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid molestias dolores dolore dicta. Enim voluptatum
                      quam vero tempora laboriosam aut ratione sint architecto.
                      Excepturi facilis molestias numquam reiciendis? Quisquam,
                      ipsum.
                    </p>
                  </div>
                </NavLink>
                <NavLink className="logout-btn" to={"/login"}>
                  <div className="cd4" data-aos="zoom-in">
                    <h2 className="cd3title">Games</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid molestias dolores dolore dicta. Enim voluptatum
                      quam vero tempora laboriosam aut ratione sint architecto.
                      Excepturi facilis molestias numquam reiciendis? Quisquam,
                      ipsum.
                    </p>
                  </div>
                </NavLink>
              </div>
              <div className="col2">
                <img src={home3} alt="home img" className="homeimg3" />
              </div>
              <div className="col3">
                <NavLink className="logout-btn" to={"/event"}>
                  <div className="cd4" data-aos="zoom-in">
                    <h2 className="cd3title">Special Events</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid molestias dolores dolore dicta. Enim voluptatum
                      quam vero tempora laboriosam aut ratione sint architecto.
                      Excepturi facilis molestias numquam reiciendis? Quisquam,
                      ipsum.
                    </p>
                  </div>
                </NavLink>
                <NavLink className="logout-btn" to={"/login"}>
                  <div className="cd4" data-aos="zoom-in">
                    <h2 className="cd3title">Quizes</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid molestias dolores dolore dicta. Enim voluptatum
                      quam vero tempora laboriosam aut ratione sint architecto.
                      Excepturi facilis molestias numquam reiciendis? Quisquam,
                      ipsum.
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* blogs section */}
        <section className="homeSection3" data-aos="zoom-in">
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
        <section className="homeSection3" data-aos="zoom-in">
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

