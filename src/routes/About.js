import React from "react";
import ProfilePic from "../img/profile_pic.jpg";
import LaptopImg from "../img/laptop.svg"
import ExploreImg from "../img/explore.svg";
import "./About.css";
// import { FaLanguage } from "react-icons/fa";

const About = () => {
    return (
      <div className="about-container">
        <div className="profile-top">
            <div className="profile-box">
              <img className="profile-pic" src={ProfilePic} alt="profile-pic" />
              <div className="profile-card-text">
                <h1>Dahye Ji</h1>
                <h3 style={{ marginTop: "0" }}>
                  <span style={{ marginRight: "2px" }}>👩🏻‍💻</span> Front-End
                  Developer
                </h3>
                <p>Lives in London</p>
                <p>Skills: HTML/CSS/SASS/JavaScript/React</p>
                <p>Speaks English, Korean</p>
              </div>
            </div>
            <a className="btnForEmail" href={`mailto:daaahailey@gmail.com`}>
              <div className="profile-contact-btn">
                <h2 className="profile-btn-text">Contact Me</h2>
              </div>
            </a>
        </div>
        <div className="about-me">
          <h1>About Me</h1>
        </div>
        <div className="about-me-text-container">
          <p className="about-me-text">
            Hello, I am Dahye, a self-taught front-end developer based in
            London.
          </p>
          <p className="about-me-text">
            My journey in programming has started since beginning of a pandemic
            last year. Before that, I worked in fashion for about 7 years after
            my graduation from fashion school. I never had an opportunity to
            rethink my career path while I was working. But, I've always wanted
            to try things that are totally different and go outside of my
            comfort zone. So, I moved to London from Seoul in 2019 with a hope
            to experience new things that I haven’t done in my life. But after
            six months, a global pandemic began.
          </p>
          <p className="about-me-text">
            Suddenly, given tons of free time I started to consider what options
            I have and what I can do. I was interested in the tech industry and
            I heard that programmers often don’t have a strict need for formal
            education. From then, I started to code little by little and the
            accessibility of free online resources made me feel that front-end
            development might be the answer for me.
          </p>
          <img className="laptop-img" src={LaptopImg} alt="laptop-img" />
          <p className="about-me-text">
            I didn’t have much knowledge nor prior experience in tech and wasn’t
            sure how to start. Luckily, internet has been my best friend. I
            found many resources through online like freecodecamp, udemy and I
            started to build my own projects. Being self-taught is hard.
            Especially, when I face a problem. But I like struggling. It might
            take days and numerous attempt to solve a problem or to fix
            something. However, I like challenging. Finding right solution and
            seeing things working well at the end make me very happy.
          </p>
          <p className="about-me-text">
            I've always wanted to have a career where I can constantly grow and
            working in tech, especially as a developer, I know that I have to
            keep learning. It can be tough sometimes but that's what I'm most
            excited about. Because I would like to see myself growing and
            getting better every time and that's what keeps me motivated.
          </p>
          <p className="about-me-text tech">
            These are the technologies I use:
          </p>
          <ul className="tech-list">
            <li className="tech-use">- HTML </li>
            <li className="tech-use">- CSS/SASS</li>
            <li className="tech-use">- JavaScript (ES6+)</li>
            <li className="tech-use">- React</li>
            <li className="tech-use">
              and I am currently learning Node.js + more!
            </li>
          </ul>
          <p className="about-me-text">
            I'm most interested in Front-End because I like being able to see
            the result quickly and I also enjoy watching & using things that are
            visually well curated with nice user experience. But I'd love to
            learn Back End side as well so that I can understand whole picture.
            I am looking for local Front-End developer position. For employment
            enquiries, please reach out to me at{" "}
            <a
              href={`mailto:daaahailey@gmail.com`}
              style={{
                fontWeight: "600",
                textDecoration: "none",
                color: "#7f00e0",
              }}
            >
              daaahailey@gamil.com
            </a>
          </p>
          <p className="about-me-text">
            <span>🙂 A few random facts about me.</span>
            <span>
              - I used to be a fashion blogger and often went to interview
              designers.
            </span>
            <span>
              - I met one of best friends from MySpace and we’ve been friends
              since.(For those who remember that platform…)
            </span>
            <span>
              - I was born in 🇰🇷 have lived in 🇮🇪 now live in 🇬🇧 and have been to
              🇫🇷🇧🇪🇳🇱🇸🇪🇪🇸🇨🇭🇯🇵🇸🇬🇻🇳🇵🇭 so far.
            </span>
          </p>
          <img className="explore-img" src={ExploreImg} alt="explore-img" />
        </div>
      </div>
    );
}

export default About;