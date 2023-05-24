import React from "react";
import "../styles/Contact.css";
function Contact() {
    return (
        <div className = "contact" style={{ height: "600px",  fontFamily: "Inter, sans-serif" }}>
            <form
                action="https://formspree.io/f/xvonvayk"
                method="POST"
                className="contact-form"
                style = {{color: "white", fontFamily: "Inter, sans-serif" }}
            >
                <h3  style={{  fontFamily: "Inter, sans-serif" }}>Contact Me!</h3>
                <h3>Send me a message 🚀 </h3>
                <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );

}
export default Contact;