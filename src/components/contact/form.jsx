import React from "react";
import "./index.scss";

const ContactForm = () => {
  return (
    <form
      name="contact"
      className="contact-form"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/projects"
      data-netlify-recaptcha="true"
    >
      <label style={{ display: "none" }}>
        <input name="bot-field" />
      </label>
      <label htmlFor="name" className="form-label">
        <p>Name</p>
        <input
          id="name"
          type="text"
          className="form-input"
          placeholder="John Doe"
          required
        />
      </label>
      <label htmlFor="email" className="form-label">
        <p>Email</p>
        <input
          id="email"
          type="email"
          className="form-input"
          placeholder="john_doe@example.com"
          required
        />
      </label>
      <label htmlFor="comment" className="form-label">
        <p>Message</p>
        <textarea
          id="comment"
          rows="7"
          className="form-input"
          placeholder="What's Up?"
          required
        />
      </label>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit" className="submit-button">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
