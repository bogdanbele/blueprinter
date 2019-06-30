import React from "react"
import Link from "gatsby-link"
import SocialLinkIcon from "../SocialLinkIcon/social-link-icon"

const Menu = () => (
    <div className="menu">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/page-2">About</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
        </ul>
        <SocialLinkIcon link="https://www.instagram.com/albertosings"/>
    </div>
)

export default Menu

