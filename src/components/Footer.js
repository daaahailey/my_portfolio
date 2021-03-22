import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 480px) {
    margin-top: 10%;
  }
`;

const FooterSocialUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  width: 250px;
  margin: 0 auto;
`;

const FooterSocialList = styled.h1`
  margin: 0 5%;
  color: black;
  transition: color 0.5s;
  &:hover {
    color: #46fff6;
  }
  &:visited {
    color: black;
  }
`;

const Footer = () => {
    return (
      <FooterDiv>
        <div>
          <p style={{ display: "flex", justifyContent: "center" }}>
            Designed and built by{" "}
            <a
              href="https://github.com/daaahailey/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                marginLeft: "4px",
                color: "#7f00e0",
              }}
            >
              Dahye Ji
            </a>
          </p>
        </div>
        <FooterSocialUl>
          <li>
            <a
              href="https://github.com/daaahailey/"
              target="_blank"
              rel="noreferrer"
            >
              <FooterSocialList>
                <FaGithub />
              </FooterSocialList>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/dahye-j-45a325193/"
              target="_blank"
              rel="noreferrer"
            >
              <FooterSocialList>
                <FaLinkedinIn />
              </FooterSocialList>
            </a>
          </li>
          <li>
            <a href={`mailto:daaahailey@gmail.com`}>
              <FooterSocialList>
                <AiOutlineMail />
              </FooterSocialList>
            </a>
          </li>
        </FooterSocialUl>
      </FooterDiv>
    );
}

export default Footer;