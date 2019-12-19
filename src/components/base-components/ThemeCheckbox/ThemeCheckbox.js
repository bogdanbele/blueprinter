import React from 'react'
import styles from './ThemeCheckbox.module.scss';
import {ThemeToggler} from 'gatsby-plugin-dark-mode'
import {Checkbox} from "@material-ui/core";
import {FaLightbulb, FaRegLightbulb} from "react-icons/fa";

export default class ThemeCheckbox extends React.Component {
    render() {
        const checked = <FaLightbulb/>;
        const unChecked = <FaRegLightbulb/>;
        return (
            <ThemeToggler>
                {({theme, toggleTheme}) => (
                    <label className={`${styles.Checkbox} ${this.props.className}`}>
                        <Checkbox
                            inputProps={
                                {'aria-label': 'Change Theme Button'}
                            }
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                            checkedIcon={checked}
                            icon={unChecked}
                        />
                    </label>
                )}
            </ThemeToggler>
        )
    }
}
