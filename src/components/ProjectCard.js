import React from "react";
import "./ProjectCard.css"


const ProjectCard = (props) => {
    return (
      <div className="project-cards">
        <div className="project-preview">
          <img src={props.img} alt="project-img" />
        </div>
        <div className="project-info">
          <h1 className="project-title">{props.title}</h1>
          <p className="project-description">{props.description}</p>
          <p className="project-tech">{props.tech}</p>
          <div className="btns">
            <button className="see-project-btns">
              <a
                className="btn-text"
                href={props.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
            <button className="see-project-btns">
              <a
                className="btn-text"
                href={props.code}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
          </div>
        </div>
      </div>
    );
}

export default ProjectCard;