import React from "react";
import { navigateTo } from "gatsby";
import "./index.scss";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [formData, setFormData] = React.useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/contact?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => console.log(error));
  };

  return (
    <form
      name="contact"
      action="/thank-you"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      className="contact-form"
      data-netlify="true"
      onSubmit={handleSubmit}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className="submit-button">
        Send
      </button>
    </form>
  );
};
export default ContactForm;
