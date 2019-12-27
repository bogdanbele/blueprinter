import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

export default function Item(props) {
	const {children} = props;
	return (
		<div
			{...props}
			className={`${styles.Item} ${props.className}`}>
			{children}
		</div>
	);
}

Item.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
