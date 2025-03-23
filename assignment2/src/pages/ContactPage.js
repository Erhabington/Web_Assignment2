import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";


const ContactPage = () => {
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
      <Contact />
    </>
  );
};

export default ContactPage;
