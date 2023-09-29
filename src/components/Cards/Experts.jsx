import React from "react";
import "./Experts.css";
import img1 from "../../images/person1.jpg";
import img2 from "../../images/person2.jpg";
import img3 from "../../images/person3.jpg";

export default function Experts(props) {
  return (
    <div className="cd7Container">
      <div className="cd7Wrapper">
        <div className="card7">
          <div className="first-content">
            <img src={props.image} alt="" className="cd7image" />
            <div className="cd7first">
              <p className="cd7firstText">{props.name}<br></br>{props.position} </p>
            </div>
          </div>
          <div className="second-content">
            <div className="cd7textDiv">
              <h2 className="cd7text">{props.name} </h2>
              <button className="cssbuttons-io-button">
                Chat
                <div className="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
