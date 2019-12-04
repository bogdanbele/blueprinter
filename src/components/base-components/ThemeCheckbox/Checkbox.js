import React from 'react'
import styles from './Checkbox.module.scss';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default class ThemeCheckbox extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className={styles.Checkbox}>
            Theme{' '}
            <input
                type="Checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
            />
          </label>
        )}
      </ThemeToggler>
    )
  }
}
