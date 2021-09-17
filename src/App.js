import React from "react";
import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Project from "./components/Projects/Project";
import Work from "./components/Work/Work";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Work />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
