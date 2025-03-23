import React from "react";
import "../styles/About.css";

const About = ({ profilePic, skills, description }) => {
  return (
    <section className="about">
      <img src={profilePic || "/images/default-profile.jpg"} alt="Profile" />
      <h2>About Me</h2>
      <p>{description || "This is where your biography will appear."}</p>
      <h3>Skills</h3>
      <ul>
        {skills && skills.length > 0 ? (
          skills.map((skill, index) => <li key={index}>{skill}</li>)
        ) : (
          <li>No skills added yet.</li>
        )}
      </ul>
    </section>
  );
};

export default About;
