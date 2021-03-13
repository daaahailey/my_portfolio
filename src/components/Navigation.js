import React from "react";
import logo from "../img/logo.png";

import "./Navigation.css";

const Navigation = () => {
    return (
      <div className="nav-div">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo" />
        </div>
        <ul className="nav-container">
          <li className="nav-list">About Me</li>
          <li className="nav-list">Projects</li>
          <li className="nav-list">Contact</li>
        </ul>
      </div>
    );
}

export default Navigation;