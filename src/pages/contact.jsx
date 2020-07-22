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
  FaStackOverflow,
} from "react-icons/fa";
import ExternalLink from "../components/presentational/externalLink";
import { PROFILE_LINKS } from "../helpers/constants";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-page">
      <h1 className="page-title">
        Let's Talk
        <Emoji label="Speech Balloon" emoji={" 💬 "} />
      </h1>
      <div className="contact-container">
        <div className="profile-links">
          <ExternalLink href={PROFILE_LINKS.twitter}>
            <FaTwitter />
          </ExternalLink>
          <ExternalLink href={PROFILE_LINKS.github}>
            <FaGithub />
          </ExternalLink>
          <ExternalLink href={PROFILE_LINKS.linkedin}>
            <FaLinkedin />
          </ExternalLink>
          <ExternalLink href={PROFILE_LINKS.dev}>
            <FaDev />
          </ExternalLink>
          <ExternalLink href={PROFILE_LINKS.medium}>
            <FaMedium />
          </ExternalLink>
          <ExternalLink href={PROFILE_LINKS.stackoverflow}>
            <FaStackOverflow />
          </ExternalLink>
        </div>
        <ContactForm />
      </div>
    </div>
  </Layout>
);

export default ContactPage;
