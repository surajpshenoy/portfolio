import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";
//import { KeyboardArrowDown } from "@material-ui/icons"
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed:  60,
      backDelay: 1500,
      strings: ["Developer", "Tester", "Designer" ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I am</h2>
          <h1>Suraj Shenoy</h1>
          <h3>
            Web Application <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#work">
          <img src="assets/arrow2.png" alt="arrow-down"></img>
        </a>
      </div>
    </div>
  );
}
