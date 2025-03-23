import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("portfolioData");
    if (data) {
      setPortfolioData(JSON.parse(data));
    }
  }, []);

  if (!portfolioData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <Projects projects={portfolioData.projects} />
    </>
  );
};

export default ProjectsPage;
