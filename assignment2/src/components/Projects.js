import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const Projects = ({ projects: propProjects }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!propProjects || propProjects.length === 0) {
      const storedData = localStorage.getItem("portfolioData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setProjects(parsedData.projects || []);
        console.log("Projects data:", parsedData.projects);
      }
    } else {
      setProjects(propProjects);
    }
  }, [propProjects]);

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              github={project.github}
            />
          ))
        ) : (
          <p>No projects added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
