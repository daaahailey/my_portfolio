import React from "react";
import "./About.css";

const About = () => {
    return (
      <div className="about-container">
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
            to experience new things I haven’t done in my life. But after six
            months, a global pandemic began.
          </p>
          <p className="about-me-text">
            Suddenly, given tons of free time I started to consider what options
            I have and what I can do. I was interested in the tech industry and
            I heard that programmers often don’t have a strict need for formal
            education. From then, I started to code little by little and the
            accessibility of free online resources made me feel that front-end
            development might be the answer for me.
          </p>
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
        </div>
      </div>
    );
}

export default About;