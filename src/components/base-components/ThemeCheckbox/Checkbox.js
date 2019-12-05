import React from 'react'
import styles from './Checkbox.module.scss';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import {Checkbox} from "@material-ui/core";
import {FaLightbulb,FaRegLightbulb} from "react-icons/fa";

export default class ThemeCheckbox extends React.Component {
  render() {
    const checked = <FaLightbulb/>;
    const unChecked = <FaRegLightbulb/>;
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className={styles.Checkbox}>
            <Checkbox
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                color='secondary'
                checkedIcon={checked}
                icon={unChecked}
            />
          </label>
        )}
      </ThemeToggler>
    )
  }
}
