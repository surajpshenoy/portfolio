import React from "react";
import "./Intro.scss";
//import { KeyboardArrowDown } from "@material-ui/icons"
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/ss2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There. I am</h2>
          <h1>Suraj Shenoy</h1>
          <h3>Web <span>Developer</span></h3>
        </div>
        <a href="#work">
          <img src="assets/arrow2.png" alt="arrow-down"></img>
        </a>
      </div>
    </div>
  );
}
