import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./Navigation.css";

const Navigation = () => {
    return (
      <div className="nav-div">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-container">
          <Link to="/" className="nav-list">
            Home <span className="hover-line"></span>
          </Link>
          <Link to="/about" className="nav-list">
            About Me <span className="hover-line"></span>
          </Link>
          <Link to="/projects" className="nav-list">
            Projects <span className="hover-line"></span>
          </Link>
          <Link to="/contact" className="nav-list">
            Contact <span className="hover-line"></span>
          </Link>
        </div>
      </div>
    );
}

export default Navigation;