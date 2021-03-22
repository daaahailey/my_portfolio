import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";


const SocialHandleDiv = styled.div`
  position: fixed;
  padding: 0;
  margin-left: 15px;
  z-index: 1;

  @media (max-width: 768px) {
  display: none;
  }
`;

const SocialUl = styled.ul`
  list-style: none;
  width: 50px;
  justify-content: flex-start;
  text-decoration: none;

`;

const SocialIcon = styled.h1`
  color: black;
  transition: color 0.5s;

  &:hover {
    color: #46fff6;
  }
  &:visited {
    color: black;
  }
`;


const Social = () => {
  return (
    <SocialHandleDiv className="social-handle">
      <SocialUl className="social-icons">
        <li>
          <a
            href="https://github.com/daaahailey/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <FaGithub />
            </SocialIcon>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/dahye-j-45a325193/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon>
              <FaLinkedinIn />
            </SocialIcon>
          </a>
        </li>
        <li>
          <a href={`mailto:daaahailey@gmail.com`}>
            <SocialIcon>
              <AiOutlineMail />
            </SocialIcon>
          </a>
        </li>
      </SocialUl>
    </SocialHandleDiv>
  );
};

export default Social;
