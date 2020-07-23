import React from "react";
import "./index.scss";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="form-elements-container">
        <label htmlFor="name" className="form-label">
          <span>Name</span>
        </label>
        <input id="name" className="form-input" />

        <label htmlFor="email" className="form-label">
          <span>Email</span>
        </label>
        <input id="email" className="form-input" />
        <label htmlFor="comment" className="form-label">
          <span>Whats Up?</span>
        </label>
        <textarea id="comment" className="form-input" />
      </div>
    </form>
  );
};

export default ContactForm;
