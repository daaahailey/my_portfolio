import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

const Main = () => {
    return (
      <div className="main-container">
        <div className="main-banner">
          <div className="text-wrapper">
            <h3>Hello, I'm</h3>
            <h1 className="my-name">Dahye Ji</h1>
            <h3>
              a self-taught{" "}
              <span className="front-end">Front End Developer</span> based in
              London.
            </h3>
            <h5>
              During this pandemic, I started programming and decided to change
              my career :)
            </h5>
          </div>
          <div className="btn-container">
            <Link to="/my_portfolio/projects">
              <button className="main-btns">View Projects</button>
            </Link>
            <button className="main-btns">
              <a className="btnForEmail" href={`mailto:daaahailey@gmail.com`}>
                Get In Touch
              </a>
            </button>
          </div>
        </div>
      </div>
    );

}

export default Main;