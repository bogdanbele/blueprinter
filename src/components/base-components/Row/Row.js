import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.scss';

class Row extends Component {
	render() {
		const {className, children} = this.props;
		return <div className={styles.RowHolder}>
			<div className={`${styles.Row}${className ? ` ${className}` : ''}`}>
				{children}
			</div>
		</div>;
	}
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Row;
