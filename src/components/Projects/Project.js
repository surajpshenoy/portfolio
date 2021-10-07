import React from "react";
import "./Project.scss";
import projects from "../../Data";

export default function Project() {
  const categoryList = [...new Set(projects.map((item) => item.category))];
  console.log(categoryList);
  return (
    <div className="project" id="project">
      <h1>My Projects</h1>
      <div className="underline"></div>
      <ul>
        <li className="active">React.JS</li>
        <li>Java</li>

        <li>Java Script</li>
        <li>Database</li>
        <li>WordPress</li>
        <li>UI/UX</li>
      </ul>
      <div className="projectContainer">
        <div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div>
        <div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div>
        <div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div>
        <div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div>
        <div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div>

        <div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div><div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div>

        <div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div><div className="item">
          <img src="assets/test.jpg"></img>
          <h3>Item Name</h3>
        </div>
      </div>
    </div>
  );
}
