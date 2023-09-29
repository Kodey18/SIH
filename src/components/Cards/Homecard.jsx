import React from "react";
import "./Homecard.css";
import img1 from "../../images/bg4.jpg";

export default function Homecard(props) {
  return (
    <div className={props.ct} id='hmcard'>
      <div className="cd6Wrapper">
        <div className="cd6textDiv">
          <h3>{props.name}</h3>
          <p className="cd6Text">
            {props.text}
          </p>
        </div>
        <div className="cd6imgDiv">
          <img src={props.image} alt="" className="cd6Image" />
        </div>
      </div>
    </div>
  );
}
