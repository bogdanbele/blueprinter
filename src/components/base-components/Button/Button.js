import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default class Button extends React.PureComponent {
	render() {
		const {children, disabled, onClick, className, type, ...props} = this.props;
		return (
			<button
				{...props}
				className={`${styles.Button}${className ? ` ${className}` : ''}`}
				disabled={disabled}
				onClick={onClick}
				type={type}>
				{children}
			</button>
		);
	}
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	disabled: false,
	className: '',
	type: 'button'
};
