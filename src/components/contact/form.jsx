import React from "react";
import "./index.scss";

const ContactForm = () => (
  <form
    name="contact"
    className="contact-form"
    netlify-honeypot="bot-field"
    data-netlify="true"
    data-netlify-recaptcha="true"
    method="POST"
    action="/thank-you"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label>
      <input type="hidden" name="bot-field" />
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

export default ContactForm;
