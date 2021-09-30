import React from "react";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Work</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#projects">My Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Get In Touch</a>
        </li>
      </ul>
    </div>
  );
}
