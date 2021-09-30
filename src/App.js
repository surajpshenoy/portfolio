import React, { useState } from "react";
import Contact from "./components/Contact/Contact";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Project from "./components/Projects/Project";
import Work from "./components/Work/Work";
import Menu from "./components/Menu/Menu";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
