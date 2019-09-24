import React from "react"
import Link from "gatsby-link"
import style from './Menu.module.scss'

const Menu = () => (
    <div className={style.Menu}>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    </div>
)

export default Menu

