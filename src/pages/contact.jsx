import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Emoji from "../components/presentational/emoji";
import ContactForm from "../components/contact/form";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaDev,
  FaMedium,
} from "react-icons/fa";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-page">
      <h1 className="page-title">
        Say Hello
        <Emoji label="Waving Hand" emoji={" 👋🏻 "} />
      </h1>
      <div className="contact-container">
        <div>
          <FaTwitter />
          <FaGithub />
          <FaLinkedin />
          <FaDev />
          <FaMedium />
        </div>
        <ContactForm />
      </div>
    </div>
  </Layout>
);

export default ContactPage;
