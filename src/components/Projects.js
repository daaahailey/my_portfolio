import React from "react";
import ProjectCard from "./ProjectCard";
import Calculator from "../project-img/calculator.gif";
import ToDo from "../project-img/to_do_list.gif";
import Ecommerce from "../project-img/ecommerce.png";
import Mybar from "../project-img/my_bar.png";
import Makeup from "../project-img/makeup_artist.png";

const Projects = () => {

    return (
      <div
        className="project-container"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10%",
          paddingTop: "5%",
          backgroundColor: "aliceblue",
        }}
      >
        <div className="projects" style={{ margin: "0 auto", width: "74%" }}>
          <h1 style={{ fontSize: "2.5em", textAlign: "left" }}>Projects</h1>
        </div>
        <div
          className="project-cards-container"
          style={{ width: "74%", margin: "0 auto", textAlign: "left" }}
        >
          <ProjectCard
            title="Makeup Artist's Website"
            description="Website built for a makeup artist. Showcasing her previous work for future clients"
            tech="React, CSS"
            img={Makeup}
          />
          <ProjectCard
            title="My Bar"
            description="Cocktail recipe app built with React using API"
            tech="React, CSS"
            img={Mybar}
          />
          <ProjectCard
            title="E-commerce Store"
            description="E-commerce store selling furniture. Color, category and price range filters update the list of products in real time.
Products can be sorted three ways: Default(Best Match), Price: highest first, Price: lowest first. Selecting a sort option updates the list of products in real time.
Using 'Filter By' menu on left side, products can be searched by chosen option such as colour, category and price range.
Clicking the Add to basket button will update the cart icon in the top right of the page to show the number of products in the cart.
Products in the cart are stored and remembered by the browser using localStorage.
Images on the Product Details Page are in a carousel
Website is responsive for web and mobile both."
            tech="JavaScript, SASS, HTML"
            img={Ecommerce}
          />
          <ProjectCard
            title="To Do App"
            description="To Do App built with Vanilla JS. You can add/delete user name and it displays greeting message with user name.
You can add new to-do on the list, delete, move to done, move back to to-do.
Current time and date by location.
Real time temperature by location (using API from https://openweathermap.org/api)
Random background image every tim when it's refreshed."
            tech="JavaScript, CSS, HTML"
            img={ToDo}
          />
          <ProjectCard
            title="Calculator"
            description="Calculator made with Vanilla JS. It has basic functionality of calculation(+,-,*,/) and can calculate multiple numbers."
            tech="JavaScript, CSS, HTML"
            img={Calculator}
            // live={}
            code={"https://github.com/daaahailey/Calculator" }
          />
        </div>
      </div>
    );
}



export default Projects;