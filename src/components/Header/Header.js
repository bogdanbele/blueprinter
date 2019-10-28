import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu/Menu"
import style from './Header.module.scss'
import logoSvg from './logo-text-pinkwhite.svg'

const Header = () => (
    <header className={style.theme}>
        <div className='header-holder'>
            <Link to="/">
                 <img src={logoSvg}/>
            </Link>
            <Menu/>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

export default Header
