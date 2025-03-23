import React from "react";
import "../styles/Footer.css";

const Footer = ({ socialLinks }) => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Portfolio</p>
      <div className="social-links">
        {socialLinks && socialLinks.length > 0 ? (
          socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ))
        ) : (
          <p>No social links added.</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
