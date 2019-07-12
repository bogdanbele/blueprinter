import React from "react";
import SocialMediaMenu from "../SocialMediaMenu/social-media-menu.js"

const Footer = () => (
  <footer>

    <SocialMediaMenu />

    <div>
      © Dhanial Salim {new Date().getFullYear()}
      {` `}
    </div>
  </footer>
);

export default Footer;
