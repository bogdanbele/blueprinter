import React from "react";
import SocialMediamenu from "../SocialMediaMenu/social-media-menu";

const Footer = () => (
  <footer>
    <SocialMediamenu />
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Blueprint</a>
    </div>
  </footer>
);

export default Footer;
