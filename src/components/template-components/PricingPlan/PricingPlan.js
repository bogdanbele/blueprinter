import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import styles from './PricingPlan.module.scss';

export default class PricingPlan extends React.Component {
	render() {
		console.log(this.props.features);
		return (
			<Flex className={`column ${styles.PricingPlan} ${this.props.className}`}>
				<Item>
					<h2 className="my-4 text-center">{this.props.title}</h2>
				</Item>
				<PlanFeature></PlanFeature>
			</Flex>
		);
	}
}

class PlanFeature extends React.Component {
	render() {
		return (
			<Item>
				<p className="p-2">Test</p>

				<h2 className="text-center">300$</h2>
			</Item>
		);
	}
}
