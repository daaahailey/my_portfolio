import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";



const HamDiv = styled.div`
  position: fixed;
  z-index: 2;
  display: none;
  top: 0;
  bottom 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

const SecondaryBackground = styled.div`
  background: #46fff6; 
  top: 0;
  bottom 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const MenuLayer = styled.div`
  position: relative;
  background: #582fb7;
  height: 100%;
  overflow: hidden;
`;

const HamMenuList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const StyledLink = styled(NavLink)`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat");
  text-decoration: none;
  margin: 4% 10%;
  color: white;
  font-size: 6em;
  height: 135px;
  // width: 700px;
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  &:hover {
    color: #46fff6;
  }

  @media (max-width: 768px) {
    font-size: 5em;
    height: 100px;
  }

  @media (max-width: 480px) {
    font-size: 2.8em;
    height: 80px;
  }
`;

const HamburgerMenu = ({ state }) => {
  // variables for animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);

  let menu1 = useRef(null);
  let menu2 = useRef(null);
  let menu3 = useRef(null);
  let menu4 = useRef(null);

  
  useEffect(() => {
    if (state.clicked === false) {
      // close menu
      // menu.style.display = 'none';
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      // menu.style.display = "block";
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      //  fadeInUp()
      staggerText(menu1, menu2, menu3, menu4);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  // const fadeInUp = (node) => {
  //   gsap.from(node, {
  //     y: 60,
  //     duration: 1,
  //     delay: 0.2,
  //     opacity: 0,
  //     ease: "power3.inOut",
  //   });
  // };

  const staggerText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "back.inOut",
      stagger: {
        amount: 0.3
      },
    });
  };

  return (
    <HamDiv ref={(el) => (menu = el)} className="hamburger-menu">
      <SecondaryBackground
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></SecondaryBackground>
      <MenuLayer ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="container">
          <nav>
            <HamMenuList>
              {/* <GlobalStyles/> */}
              <StyledLink ref={(el) => (menu1 = el)} to="/my_portfolio/">
                Home
              </StyledLink>
              <StyledLink ref={(el) => (menu2 = el)} to="/my_portfolio/about">
                About
              </StyledLink>
              <StyledLink
                ref={(el) => (menu3 = el)}
                to="/my_portfolio/projects"
              >
                Projects
              </StyledLink>
              <StyledLink ref={(el) => (menu4 = el)} to="/my_portfolio/contact">
                Contact
              </StyledLink>
            </HamMenuList>
          </nav>
        </div>
      </MenuLayer>
    </HamDiv>
  );
};

export default HamburgerMenu;
