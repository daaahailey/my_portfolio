import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import "./Navigation.css";

const Navigation = () => {
    return (
      <div className="nav-div">
        <div className="logo">
          <NavLink to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="nav-container">
          <NavLink to="/" activeClassName="is-active" className="nav-list" exact>
            Home <span className="hover-line"></span>
          </NavLink>
          <NavLink to="/about" activeClassName="is-active" className="nav-list">
            About Me <span className="hover-line"></span>
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="is-active"
            className="nav-list"
          >
            Projects <span className="hover-line"></span>
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="is-active"
            className="nav-list"
          >
            Contact <span className="hover-line"></span>
          </NavLink>
        </div>
      </div>
    );
}

export default Navigation;