import React from 'react';
import {
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaSoundcloud,
    FaLinkedin,
} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import styles from './Social-link-icon.module.scss';

// RegEx Checks

const isTwitterLink = string => {
    const regExp = /http(s)?:\/\/(.*\.)?twitter\.com\/[A-z0-9_]+\/?/gm;
    return regExp.test(string);
};

const isFacebookLink = string => {
    const regExp = /http(s)?:\/\/(www\.)?(facebook|fb)\.com\/[A-z0-9_]+\/?/gm;
    return regExp.test(string);
};

const isInstagramLink = string => {
    const regExp = /https?:\/\/(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/gm;
    return regExp.test(string);
};

const isYoutubeLink = string => {
    const regExp = /http(s)?:\/\/(.*\.)?youtube\.com\/[A-z0-9_]+\/?/gm;
    return regExp.test(string);
};

const isSoundcloudLink = string => {
    const regExp = /http(s)?:\/\/(.*\.)?soundcloud\.com\/[A-z0-9_]+\/?/gm;
    return regExp.test(string);
};

const isLinkedinLink = string => {
    const regExp = /http(s)?:\/\/(.*\.)?linkedin\.com\/[A-z0-9_]+\/?/gm;
    return regExp.test(string);
};


// Returning FontAwesome based on Link type

const extractType = string => {
    switch (true) {
        case isTwitterLink(string): {
            return <FaTwitter className={styles.socialLinkIcon}/>;
        }
        case isFacebookLink(string): {
            return <FaFacebook className={styles.socialLinkIcon}/>;
        }
        case isInstagramLink(string): {
            return <FaInstagram className={styles.socialLinkIcon}/>;
        }
        case isYoutubeLink(string): {
            return <FaYoutube className={styles.socialLinkIcon}/>;
        }
        case isSoundcloudLink(string): {
            return <FaSoundcloud className={styles.socialLinkIcon}/>;
        }
        case isLinkedinLink(string): {
            return <FaLinkedin className={styles.socialLinkIcon}/>;
        }
        default:
            return <FaFacebook/>;
    }
}

const createSocialLink = string => {
    return <a href={string} target="_blank" rel="noopener noreferrer"
              aria-label={createAltText(string)}>{extractType(string)}</a>;
}

const createAltText = string => {
    const cleanedText = string.substring('https://www.'.length);
    return 'social media link to ' + cleanedText;
}

const SocialLinkIcon = ({link}) => createSocialLink(link);
export default SocialLinkIcon;
