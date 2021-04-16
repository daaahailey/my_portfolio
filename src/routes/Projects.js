import React from "react";
import ProjectCard from "../components/ProjectCard";
import Calculator from "../project-img/calculator.gif";
import ToDo from "../project-img/to_do_list.gif";
import Ecommerce from "../project-img/ecom.gif";
import Mybar from "../project-img/my-bar.gif";
import MyWeb from "../project-img/my_website.png";
import Makeup from "../project-img/makeup.png";
import Dwitter from "../project-img/dwitter_.gif";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7% 10%;
  // padding-top: 5%;
  // background-color: #e7e2ff;

  @media (max-width: 1000px) {
    margin: 7% 14%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Projects = () => {
  return (
    <ProjectContainer>
      <div className="projects" style={{ margin: "0 auto", width: "80%" }}>
        <h1 style={{ fontSize: "2.5em", textAlign: "left" }}>Projects</h1>
      </div>
      <div
        className="project-cards-container"
        style={{ width: "80%", margin: "0 auto", textAlign: "left" }}
      >
        <ProjectCard
          title="Makeup Artist's Website"
          description="A website that I am currently building for a makeup artist. Showcasing her previous work for future clients. Not available for live view yet. Coming soon!"
          tech="React"
          img={Makeup}
          code={"https://github.com/daaahailey/makeup_artist"}
        />
        <ProjectCard
          title="D'witter"
          description="Created Twitter style sns app.
            I am working on this to learn and understand google firebase.
            Functionalities I've built so far: User can 1. sign up with email or using google/github login. 2.update profile picture, display name 3. Dweet and edit or delete the Dweet that user left!"
          tech="React, Styled Components, Firebase"
          img={Dwitter}
          code={"https://github.com/daaahailey/sns"}
        />
        <ProjectCard
          title="Portfolio"
          description="My portfolio website. Yes, this is the website you are currently looking at. Since I've been learning React, I wrote it with React. Also, I wanted to learn to use libraries, so tried to use Styled Components and GSAP for animation."
          tech="React, CSS, Styled Components, GSAP"
          img={MyWeb}
          live={"https://daaahailey.github.io/my_portfolio"}
          code={"https://github.com/daaahailey/my_portfolio"}
        />
        <ProjectCard
          title="My Bar - Cocktail Recipe App"
          description="Cocktail recipe app built with React using API.
            There are recipes of gin based cocktails. You can scroll to discover recipes or search name on the app to find the recipe.
            First app I built with React. I made this to learn to get data from API and play with it.
            It was also first time that I used router to display different sections."
          tech="React, CSS"
          img={Mybar}
          live={"https://daaahailey.github.io/my_bar"}
          code={"https://github.com/daaahailey/my_bar"}
        />
        <ProjectCard
          title="E-commerce Store"
          description="E-commerce store selling furniture.
            It's written with Vanilla JavaScript.
            I intentionally didn't use any framework or library for it.
            There are three pages - Home, Shop and Magazine.
            You can search items by color, category and price range using 'Filter By' menu on left side on shop page.
            Products can be sorted in three ways: Default(Best Match), Price: highest first, Price: lowest first.
            Clicking the Add to basket button will update the cart icon in the top right of the page to show the number of products in the cart.
            Products in the cart are stored and remembered by the browser using local storage."
          tech="JavaScript, SASS, HTML"
          img={Ecommerce}
          live={"https://daaahailey.github.io/E-Commerce-Website/"}
          code={"https://github.com/daaahailey/E-Commerce-Website"}
        />
        <ProjectCard
          title="To Do App"
          description="To Do App built with Vanilla JS.
            Made this app to learn to add/save and delete from page and local storage.
            You can add/delete user name and it displays greeting message with user name.
            You can add new to-do on the list, delete, move to done, move back to to-do.
            Current time, date and real time temperature will be displayed by location (using API from https://openweathermap.org/api)
            Background image changes randomly every time when it's refreshed."
          tech="JavaScript, CSS, HTML"
          img={ToDo}
          live={"https://daaahailey.github.io/To-Do-List/"}
          code={"https://github.com/daaahailey/To-Do-List"}
        />
        <ProjectCard
          title="Calculator"
          description="Calculator made with Vanilla JS. It has basic functionality of calculation(+,-,*,/) and can calculate multiple numbers.
            I made this to see how I can actually use JavaScript that I learned and how to use the functions."
          tech="JavaScript, CSS, HTML"
          img={Calculator}
          live={"https://daaahailey.github.io/Calculator/"}
          code={"https://github.com/daaahailey/Calculator"}
        />
      </div>
    </ProjectContainer>
  );
};

export default Projects;
