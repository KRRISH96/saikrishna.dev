import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
      {/* <Image /> */}
      <p>First Para</p>
      <p>Second Para</p>
      <div>Links</div>
    </div>
  </Layout>
);

export default AboutPage;
