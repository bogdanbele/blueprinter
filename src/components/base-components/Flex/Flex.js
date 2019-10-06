import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Flex.module.scss';

export default class Flex extends Component {
	render() {
		const {className, children} = this.props;
		return <div className={`${styles.Flex} ${className ? ` ${className}` : ''}`}>{children}</div>;
	}
}

Flex.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
