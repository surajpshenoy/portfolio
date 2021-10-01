import React from "react";
import "./Project.scss";
import projects from "../../Data";


export default function Project() {

  const categoryList = [ ...new Set(projects.map((item)=>item.category))];
  console.log(categoryList)
  return (<div className="project" id="project">
    <h1>Projects</h1>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      
    </ul>
    <div className="projectContainer">
      <div className="item">
        <img src="assets/swu.png">
        </img>
        <h3>Item Name</h3>
      </div>
    </div>
  </div>);
}
