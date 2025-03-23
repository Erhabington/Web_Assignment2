import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Hero.css";

const Hero = ({ profilePic,name, bio }) => {
  const navigate = useNavigate(); 

  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profilePic || "/images/default-profile.jpg"} alt="Profile" />
        <h1>{name || "Your Name"}</h1>
        <p>{bio || "A short bio about yourself."}</p>
        <button onClick={() => navigate("/projects")}>View My Work</button>
      </div>
    </section>
  );
};

export default Hero;
