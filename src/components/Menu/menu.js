import React from "react"
import Link from "gatsby-link"

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
    </div>
)

export default Menu

