import React, { useState, useEffect } from "react";
import { withRouter , NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import styled from "styled-components";
import logo from "../img/logo.png";
import "./Navigation.css";


const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 40px;
  padding: 0;
  align-items: center;

  @media (max-width: 480px) {
    margin: 2% 5%;
  }
`;

const MenuBtn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat");
  font-family: "Montserrat", sans-serif;
  position: fixed;
  font-weight: 600;
  top: 15px;
  right: 25px;
  width: 100px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: 1.8em;
  color: black;
  box-shadow: none;
  z-index: 5;

  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 480px) {
    font-size: 1.4em;
    width: 78px;
}
  }

  &:hover {
    box-shadow: none;
    background-color: transparent;
    color: black;
    transform: none;
  }
  &:active {
    transform: none;
  }
`;

const NavMenu = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;


const Navigation = ({ history }) => {

  // state for hamburger menu
  const [hamActive, setHamActive] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // state for disabled button 
  const [disabled, setDisabled] = useState(false);


  // use effect for page changes 
  useEffect(() => {
    history.listen(() => {
      setHamActive({
        clicked: false,
        menuName: "Menu"
      })
    })
  });

  

  const handleMenu = () => {
    disableMenu();
    if (hamActive.initial === false) {
      setHamActive({
        initial: null,
        clicked: true,
        menuName: "Close",
      }); // need this for animation
      // console.log("hamActive, first");
    } else if (hamActive.clicked === true) {
      setHamActive({
        clicked: !hamActive.clicked,
        menuName: "Menu",
      });
      // console.log("hamNotActive");
    } else if (hamActive.clicked === false) {
      setHamActive({
        clicked: !hamActive.clicked,
        menuName: "Close",
      });
      // console.log("hamActive");
    }
  };

  // Determine if the menu button should be disabled.

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };



    return (
      <NavContainer className="nav-div-container">
        <div className="logo" style={{ margin: "0", padding: "0"}}>
          <NavLink to="/my_portfolio/">
            <img className="logo-img" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="hamburger-menu">
          <MenuBtn disabled={disabled} onClick={handleMenu}>
            {hamActive.menuName}
          </MenuBtn>
          <HamburgerMenu state={hamActive} />
        </div>
        <NavMenu className="list-container" style={{ zIndex: "1" }}>
          <NavLink
            to="/my_portfolio/"
            activeClassName="is-active"
            className="nav-list"
            exact
          >
            Home <span className="hover-line"></span>
          </NavLink>
          <NavLink
            to="/my_portfolio/about"
            activeClassName="is-active"
            className="nav-list"
          >
            About Me <span className="hover-line"></span>
          </NavLink>
          <NavLink
            to="/my_portfolio/projects"
            activeClassName="is-active"
            className="nav-list"
          >
            Projects <span className="hover-line"></span>
          </NavLink>
          <NavLink
            to="/my_portfolio/contact"
            activeClassName="is-active"
            className="nav-list"
          >
            Contact <span className="hover-line"></span>
          </NavLink>
        </NavMenu>
      </NavContainer>
    );
}

export default withRouter(Navigation);