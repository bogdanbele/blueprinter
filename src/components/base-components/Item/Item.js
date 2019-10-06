import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

export default class Item extends Component {

	render() {
		const {children} = this.props;
		return (
			<div className={styles.Item}>{children}</div>
		);
	}
}

Item.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
