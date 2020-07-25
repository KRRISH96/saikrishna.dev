import React from "react";
import "./index.scss";

const ContactForm = () => (
  <form
    name="contact"
    action="/thank-you"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify-recaptcha="true"
    className="contact-form"
    netlify
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <label htmlFor="name" className="form-label">
      Name
      <br />
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
      Email
      <br />
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
      Message
      <br />
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
