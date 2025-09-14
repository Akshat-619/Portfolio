import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">
        I’m always excited to connect! Whether you have a project idea, a question, or just want to say hi, feel free to reach out.
      </p>
      <div className="contact-container">
        <form
          className="contact-form"
          action="mailto:official.akshatsharma04@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="btn-send">
            Send Message
          </button>
        </form>
        <div className="contact-links">
          <a
            href="mailto:official.akshatsharma04@gmail.com"
            className="contact-link"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/akshatsharmaofficial04"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Akshat-619"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
