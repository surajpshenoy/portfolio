import React from "react";
import "./Topbar.scss";
import { GitHub, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="mainWrapper">
        <div className="leftContainer">
          <a href="#intro" className="logo">
            Suraj Shenoy
          </a>
          <div className="infoContainer">
            <GitHub className="icon" />
            <span>/surajpshenoy</span>
          </div>
          <div className="infoContainer">
            <Mail className="icon" />
            <span>surajpshenoy@gmail.com</span>
          </div>
        </div>
        <div className="rightContainer">
          <div className="hamburgerBtn">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
