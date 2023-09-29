import React from "react";
import "./Event.css";

import Navbar2 from "../../components/Navbar/Navbar2";
import Eventcard from "../../components/Cards/Eventcard";

export default function Event() {
  return (
    <div className="eventContainer">
      <div className="eventWrapper">
        <Navbar2 />
        <div className="eventList">
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
          <Eventcard />
        </div>
      </div>
    </div>
  );
}
