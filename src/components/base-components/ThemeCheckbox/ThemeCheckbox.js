import React from 'react'
import styles from './ThemeCheckbox.module.scss';
import PropTypes from 'prop-types';
import {ThemeToggler} from 'gatsby-plugin-dark-mode'
import {Checkbox} from "@material-ui/core";
import {FaLightbulb, FaRegLightbulb} from "react-icons/fa";

export default function ThemeCheckbox(props) {
    const checked = <FaLightbulb/>;
    const unChecked = <FaRegLightbulb/>;
    return (
        <ThemeToggler>
            {({theme, toggleTheme}) => (
                <label className={`${styles.Checkbox} ${props.className}`}>
                    <Checkbox
                        inputProps={
                            {'aria-label': 'Change Theme Button'}
                        }
                        onChange={e => toggleTheme(e.target.checked ? 'light' : 'dark')}
                        checked={theme === 'light'}
                        checkedIcon={checked}
                        icon={unChecked}
                    />
                </label>
            )}
        </ThemeToggler>
    )
}

ThemeCheckbox.propTypes = {
    className: PropTypes.string
};
