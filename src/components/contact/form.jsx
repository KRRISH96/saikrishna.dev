import React from "react";
import "./index.scss";

const ContactForm = () => (
  <form
    name="contact"
    method="POST"
    data-netlify-recaptcha="true"
    netlify-honeypot="bot-field"
    action="/thank-you/"
    className="contact-form"
    data-netlify="true"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label style={{ display: "none" }}>
      <input name="bot-field" />
    </label>
    <label htmlFor="name" className="form-label">
      <p>Name</p>
      <input
        id="name"
        type="text"
        name="name"
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
        name="email"
        className="form-input"
        placeholder="john_doe@example.com"
        required
      />
    </label>
    <label htmlFor="message" className="form-label">
      <p>Message</p>
      <textarea
        id="message"
        rows="7"
        name="message"
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

export default ContactForm;
