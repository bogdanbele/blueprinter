import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu/Menu"
import style from './Header.module.scss'

const Header = ({siteTitle}) => (
    <header
        className={style.theme}
    >
        <div className='header-holder'>
            <h3 style={{margin: 0}}>
                <Link
                    to="/"
                >
                    {siteTitle}
                </Link>
            </h3>
        </div>
        <Menu/>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

export default Header
