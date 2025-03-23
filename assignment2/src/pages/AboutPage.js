import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";

const AboutPage = () => {
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
      <About 
        profilePic={portfolioData.profilePic} 
        skills={portfolioData.skills} 
        description={portfolioData.bio} 
      />
    </>
  );
};

export default AboutPage;
