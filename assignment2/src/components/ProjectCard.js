import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, image, github }) => {
  return (
    <div className="project-card">
      <img src={image || "/images/default-project.png"} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
