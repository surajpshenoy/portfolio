import React from "react";
import "./Topbar.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {

  return (
    <div className={"topbar " + (menuOpen && "active")}>
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
            <LinkedIn className="icon" />
            <span>/suraj-p-shenoy</span>
          </div>
        </div>
        <div className="rightContainer">
          <div className="hamburgerBtn" onClick={()=> {setMenuOpen(!menuOpen)}}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
