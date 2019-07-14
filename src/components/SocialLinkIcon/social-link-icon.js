import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSoundcloud
} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// RegEx Checks

function isTwitterLink(string) {
  const regExp = /http(s)?:\/\/(.*\.)?twitter\.com\/[A-z0-9_]+\/?/gm;
  return regExp.test(string);
}

function isFacebookLink(string) {
  const regExp = /http(s)?:\/\/(www\.)?(facebook|fb)\.com\/[A-z0-9_]+\/?/gm;
  return regExp.test(string);
}

function isInstagramLink(string) {
  const regExp = /https?:\/\/(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/gm;
  return regExp.test(string);
}

function isYoutubeLink(string) {
  const regExp = /http(s)?:\/\/(.*\.)?youtube\.com\/[A-z0-9_]+\/?/gm;
  return regExp.test(string);
}

function isSoundcloudLink(string) {
  const regExp = /http(s)?:\/\/(.*\.)?soundcloud\.com\/[A-z0-9_]+\/?/gm;
  return regExp.test(string);
}

// Returning FontAwesome based on Link type

function extractType(string) {
  switch (true) {
    case isTwitterLink(string): {
      return <FaTwitter className="socialLinkIcon" />;
    }
    case isFacebookLink(string): {
      return <FaFacebook className="socialLinkIcon" />;
    }
    case isInstagramLink(string): {
      return <FaInstagram className="socialLinkIcon" />;
    }
    case isYoutubeLink(string): {
      return <FaYoutube className="socialLinkIcon" />;
    }
    case isSoundcloudLink(string): {
      return <FaSoundcloud className="socialLinkIcon" />;
    }
    default:
      return <FaFacebook />;
  }
}

function createSocialLink(string) {
  return <a href={string} alt={createAltText(string)}>{extractType(string)}</a>;
}

function createAltText(string){
  var cleanedText = string.substring('https://www.'.length)
  return 'social media link to '+ cleanedText
} 

const SocialLinkIcon = ({ link }) => createSocialLink(link);
export default SocialLinkIcon;
