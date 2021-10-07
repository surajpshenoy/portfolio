import React, { useState } from "react";
import "./Project.scss";
import projects from "../../Data";
import List from "../List/List";

export default function Project() {
  const ld = [
    { id: "react", title: "React" },
    { id: "java", title: "Java" },
    { id: "js", title: "JavaScript" },
    { id: "wordpress", title: "WordPress" },
    { id: "database", title: "Database" },
  ];

  // const list = [...new Set(projects.map((item) => item.category))];
  // //console.log(list)
  const [selected, setSelected] = useState("react");
  // const [categoryList, setCategoryList] = useState(list);

  return (
    <div className="project" id="project">
      <h1>My Projects</h1>
      <div className="underline"></div>
      <ul>
        {ld.map((item) => {
          return (
            <List
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id = {item.id}
            />
          );
        })}
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
      </div>
    </div>
  );
}
