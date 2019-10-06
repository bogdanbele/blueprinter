import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default class Button extends React.PureComponent {
	render() {
		const {children, disabled, onClick, className} = this.props;
		return (
			<button
				className={`${styles.Button}${className ? ` ${className}` : ''}`}
				disabled={disabled}
				onClick={onClick}
				type="button">
				{children}
			</button>
		);
	}
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	disabled: false,
	className: '',
};
