import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/DataEntry.css";

const DataEntry = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePic: "",
    skills: "",
    projects: [],
    socialLinks: [{ name: "", url: "" }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (e) => {
    setFormData({ ...formData, skills: e.target.value.split(",") });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: "", description: "", image: "", github: "" }],
    });
  };

  const handleProjectChange = (index, e) => {
    const updatedProjects = formData.projects.map((project, i) =>
      i === index ? { ...project, [e.target.name]: e.target.value } : project
    );
    setFormData({ ...formData, projects: updatedProjects });
  };

  const deleteProject = (index) => {
    const updatedProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: updatedProjects });
  };

  const addSocialLink = () => {
    setFormData({
      ...formData,
      socialLinks: [...formData.socialLinks, { name: "", url: "" }],
    });
  };

  const handleSocialChange = (index, e) => {
    const updatedLinks = formData.socialLinks.map((link, i) =>
      i === index ? { ...link, [e.target.name]: e.target.value } : link
    );
    setFormData({ ...formData, socialLinks: updatedLinks });
  };

  const deleteSocialLink = (index) => {
    const updatedLinks = formData.socialLinks.filter((_, i) => i !== index);
    setFormData({ ...formData, socialLinks: updatedLinks });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioData", JSON.stringify(formData)); 
    navigate("/home");
  };

  return (
    <div className="data-entry-container">
      <h2>Enter Your Portfolio Details</h2>
      <form className="data-entry-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <textarea name="bio" placeholder="Short Bio" onChange={handleChange} required></textarea>
        <input type="text" name="profilePic" placeholder="Profile Picture URL" onChange={handleChange} required />
        <input type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleSkillsChange} required />

        <h3>Projects</h3>
        {formData.projects.map((project, index) => (
          <div key={index} className="project-container">
            <input type="text" name="title" placeholder="Project Title" onChange={(e) => handleProjectChange(index, e)} />
            <textarea name="description" placeholder="Project Description" onChange={(e) => handleProjectChange(index, e)}></textarea>
            <input type="text" name="image" placeholder="Project Image URL" onChange={(e) => handleProjectChange(index, e)} />
            <input type="text" name="github" placeholder="GitHub Link" onChange={(e) => handleProjectChange(index, e)} />
            <button type="button" className="delete-button-projects" onClick={() => deleteProject(index)}>Delete Project</button>
          </div>
        ))}
        <button type="button" className="add-button" onClick={addProject}>Add Project</button>

        <h3>Social Links</h3>
        {formData.socialLinks.map((link, index) => (
          <div key={index} className="social-link-container">
            <input type="text" name="name" placeholder="Social Media Name" onChange={(e) => handleSocialChange(index, e)} />
            <input type="url" name="url" placeholder="Profile URL" onChange={(e) => handleSocialChange(index, e)} />
            <button type="button" className="delete-button-social" onClick={() => deleteSocialLink(index)}>Delete Social Link</button>
          </div>
        ))}
        <button type="button" className="add-button" onClick={addSocialLink}>Add Social Media</button>

        <button type="submit" className="submit-button">Generate Portfolio</button>
      </form>
    </div>
  );
};

export default DataEntry;
