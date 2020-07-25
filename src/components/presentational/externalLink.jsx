import React from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const ExternalLink = ({ href, children, ...props }) => (
  <OutboundLink
    href={href}
    target="_blank"
    rel="nofollow noopener noreferrer"
    {...props}
  >
    {children}
  </OutboundLink>
);

export default ExternalLink;
