import PropTypes from "prop-types"
import React from "react"
import { FaTwitter } from "react-icons/fa"

const SocialLinkIcon = ({ link }) => (
    <a
        href={link}>
            <FaTwitter/>
        </a>
)

SocialLinkIcon.prototype = {
    link: PropTypes.string
}

export default SocialLinkIcon