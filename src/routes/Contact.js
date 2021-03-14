import React from "react";

const Contact = () => {
    return (
      <div
        className="contact-container"
        style={{ margin: "15% 0 0 0", fontFamily: "Heebo" }}
      >
        <div className="contact-text" style={{ margin: "5%" }}>
          <h1>Get In Touch</h1>
          <h2 style={{ fontWeight: "400" }}>
            I'm open to job and project opportunities :)
          </h2>
          <p style={{ fontSize: "1.3em", margin: "0" }}>
            You can check my code on{" "}
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
              GitHub
            </a>
          </p>
        </div>
        <a href={`mailto:daaahailey@gmail.com`}>
          <button>Say Hello!</button>
        </a>
        <div className="footer" style={{marginTop: "10%"}}>
          <p className="footer-text">Designed and built by <a href="https://github.com/daaahailey/my_portfolio" style={{textDecoration: "none", fontWeight: "500"}}>Dahye Ji</a></p>
        </div>
      </div>
    );
}

export default Contact;