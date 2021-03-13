import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Social.css"
 
const Social = () => {
    return (
      <div className="social-handle" style={{ position: "fixed" }}>
        <ul
          className="social-icons"
          style={{
            listStyle: "none",
            width: "50px",
            justifyContent: "flex-start",
            textDecoration: "none",
          }}
        >
          <li>
            <a
              href="https://github.com/daaahailey/"
              target="_blank"
              rel="noreferrer"
            >
              <h1>
                <FaGithub />
              </h1>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dahye-j-45a325193/"
              target="_blank"
              rel="noreferrer"
            >
              <h1>
                <FaLinkedinIn />
              </h1>
            </a>
          </li>
          <li>
            <a href={`mailto:daaahailey@gmail.com`}>
              <h1>
                <AiOutlineMail />
              </h1>
            </a>
            {/* </BtnForEmail> */}
          </li>
        </ul>
      </div>
    );
}

export default Social;