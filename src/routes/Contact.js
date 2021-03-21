import React from "react";
import Chat from "../img/chat.png";

const Contact = () => {
    return (
      <div>
        <div
          className="contact-container"
          style={{
            fontFamily: "Heebo",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "10%",
          }}
        >
          <div className="img-container">
            <img src={Chat} alt="chat-img"/>
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
              > GitHub</a>
            </p>
            <a href={`mailto:daaahailey@gmail.com`} style={{ margin: "10%" }}>
              <button>Say Hello!</button>
            </a>
          </div>
        </div>
        <div className="footer" style={{ marginTop: "10%", width: "100%", display: "flex", justifyContent: "center" }}>
          <p className="footer-text">
            Designed and built by{" "}
            <a
              href="https://github.com/daaahailey/my_portfolio"
              style={{ textDecoration: "none", fontWeight: "500" }}
            >
              Dahye Ji
            </a>
          </p>
        </div>
      </div>
    );
}

export default Contact;