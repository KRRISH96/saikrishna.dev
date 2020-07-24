import React from "react";
import { navigate } from "gatsby";
import "./index.scss";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const ContactForm = () => {
  const [formData, setFormData] = React.useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formData,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
  <form
    name="contact"
    className="contact-form"
    netlify-honeypot="bot-field"
    data-netlify="true"
    data-netlify-recaptcha="true"
    action="/thank-you/"
    method="post"
    onSubmit={handleSubmit}
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
        name="name"
        className="form-input"
        placeholder="John Doe"
        onChange={handleChange}
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
        onChange={handleChange}
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
        onChange={handleChange}
        required
      />
    </label>
    <div data-netlify-recaptcha="true"></div>
    <button type="submit" className="submit-button">
      Send
    </button>
  </form>
);
  }
export default ContactForm;
