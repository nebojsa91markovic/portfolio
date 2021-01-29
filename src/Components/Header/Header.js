import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [isItOpen, setIsItOpen] = useState(false);
  const x = "&#x2718";
  return (
    <header className="App-header">
      <div className="logo" id="logo">
        <a href="#logo">Nebojsa Markovic</a>
      </div>
      <div className={isItOpen ? "navLinks nav-active" : "navLinks"}>
        <ul>
          <span id="close-menu" onClick={() => setIsItOpen(!isItOpen)}>
            {isItOpen && "\u2716"}
          </span>
          <li>
            <a href="#logo">Home</a>
          </li>
          <li>
            <a href="#techonologies">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <button id="toggle-menu" onClick={() => setIsItOpen(!isItOpen)}>
        {!isItOpen && "\u2630"}
      </button>
    </header>
  );
};

export default Header;
