import React from "react";
import SocialMediaMenu from "../SocialMediaMenu/social-media-menu.js"

const Footer = () => (
  <footer>

    <SocialMediaMenu />

    <div>
      © Bogdan Bele {new Date().getFullYear()}
      {` `}
    </div>
  </footer>
);

export default Footer;
