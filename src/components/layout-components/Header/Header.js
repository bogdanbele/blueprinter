import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useContext} from "react"
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import style from './Header.module.scss';
import logoText from '../../../config/logo/logo-text.svg';
import logoIcon from '../../../config/logo/logo-icon.svg';
import {navigate} from '@reach/router';
import Checkbox from '../../base-components/ThemeCheckbox/Checkbox';

const Header = () => {
    return (
        <header className={style.theme}>
            <div className='header-holder'>
                <div
                    onClick={() => navigate('/')}
                    className={style.LogoHolder}>
                    <img alt='ncweb-logo' src={logoIcon}/><img alt='ncweb-logoText' src={logoText}/>
                </div>
                <HeaderMenu/>
            </div>
            <div>
                <Checkbox/>
            </div>
        </header>
    )
        ;
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    switch: PropTypes.func
};

export default Header;
