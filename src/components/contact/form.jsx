import React from "react";
import "./index.scss";

const ContactForm = () => (
  <form
    name="contact"
    action="https://formspree.io/xqkywygr"
    method="POST"
    className="contact-form"
  >
    <input type="hidden" name="_gotcha" />
    <label htmlFor="name" className="form-label">
      Name
      <br />
      <input
        id="name"
        type="text"
        name="name"
        className="form-input"
        placeholder="John Doe"
        data-cy="name"
        required
      />
    </label>
    <label htmlFor="email" className="form-label">
      Email
      <br />
      <input
        id="email"
        type="email"
        name="_replyto"
        className="form-input"
        placeholder="john_doe@example.com"
        data-cy="email"
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
        data-cy="message"
        required
      />
    </label>
    <button type="submit" className="submit-button">
      Send
    </button>
  </form>
);

export default ContactForm;
