import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React, {useContext} from "react"
import Menu from '../Menu/Menu';
import style from './Header.module.scss';
import logoText from '../../../config/logo/logo-text.svg';
import logoIcon from '../../../config/logo/logo-icon.svg';
import {navigate} from '@reach/router';
import {FaToggleOn} from "react-icons/fa";
import {
    GlobalDispatchContext,
    GlobalStateContext,
} from "../../context-components/GlobalContextProvider"

const Header = () => {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);
    console.log(state)
    return (
        <header className={style.theme}>
            <div className='header-holder'>
                <div
                    onClick={() => navigate('/')}
                    className={style.LogoHolder}>
                    <img src={logoIcon}/><img src={logoText}/>
                    <div>
                    <FaToggleOn
                        onClick={() => {
                            dispatch({ type: "TOGGLE_THEME" })
                        }}
                    />
                    </div>
                </div>
                <Menu/>
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
