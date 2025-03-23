import React, { useState, useEffect } from "react";
import "../styles/Contact.css"; 

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("portfolioData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setSocialLinks(parsedData.socialLinks || []);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <textarea placeholder="Message" required onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                <button type="submit">Send</button>
            </form>

            <h3>Social Links</h3>
            <div className="social-links">
                {socialLinks.length > 0 ? (
                    socialLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </a>
                    ))
                ) : (
                    <p>No social links added yet.</p>
                )}
            </div>
        </section>
    );
};

export default Contact;
