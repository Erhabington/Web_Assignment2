import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
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
      <Hero profilePic={portfolioData.profilePic} name={portfolioData.name} bio={portfolioData.bio} />
      <Projects projects={portfolioData.projects} />
      <Contact />
      <Footer socialLinks={portfolioData.socialLinks}/>
    </>
  );
};

export default Home;
