import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

//   <Icon><FaTwitter></Icon>

export default class Icon extends Component {
	render() {
		const {className, children} = this.props;
		return (
			<div className={`${styles.Icon}${className ? ` ${className}` : ''}`}>
				{children}
			</div>
		);
	}
}

Icon.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
