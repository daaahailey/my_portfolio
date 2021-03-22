import React from "react";
import Chat from "../img/chat.png";
import styled from "styled-components";

const ContactContainer = styled.div`
  font-family: "Heebo";
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 10%;
  text-align: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ContactFooter = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactH2 = styled.h2`
  font-size:
`

const Contact = () => {
  return (
    <div>
      <ContactContainer className="contact-container">
        <div className="img-container">
          <img src={Chat} alt="chat-img" />
        </div>
        <div
          className="contact-text"
          style={{
            margin: "3%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Get In Touch</h1>
          <h2 style={{ fontWeight: "400" }}>
            I'm open to job and project opportunities :)
          </h2>
          <p style={{ fontSize: "1.3em", margin: "0" }}>
            You can check my code on
            <a
              href="https://github.com/daaahailey/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#7f00e0",
              }}
            >
              {" "}
              GitHub
            </a>
          </p>
          <a href={`mailto:daaahailey@gmail.com`} style={{ margin: "10%" }}>
            <button style={{ width: "170px", height: "60px" }}>
              Say Hello!
            </button>
          </a>
        </div>
      </ContactContainer>
      <ContactFooter>
        <p className="footer-text">
          Designed and built by{" "}
          <a
            href="https://github.com/daaahailey/my_portfolio"
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "#7f00e0",
            }}
          >
            Dahye Ji
          </a>
        </p>
      </ContactFooter>
    </div>
  );
};

export default Contact;
