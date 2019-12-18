import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import styles from './PricingPlan.module.scss'

export default class PricingPlan extends React.Component {
	render() {
		return (
			<Flex className={`centered ${styles.PricingPlan} ${this.props.className}`}>
            <Item>
				<h2>{this.props.title}</h2>
                </Item>
			</Flex>
		);
	}
}
