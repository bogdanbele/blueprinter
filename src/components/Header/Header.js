import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu/Menu"
import style from './Header.module.scss'
import logoText from '../../config/logo/logo-text.svg'
import logoIcon from '../../config/logo/logo-icon.svg'

const Header = () => (
    <header className={style.theme}>
        <div className='header-holder'>
            <Link to="/">
                <div className={style.LogoHolder}>
                <img src={logoIcon}/><img src={logoText}/>
                </div>
            </Link>
            <Menu/>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

export default Header
