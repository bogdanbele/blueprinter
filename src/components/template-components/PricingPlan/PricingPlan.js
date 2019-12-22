import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import styles from './PricingPlan.module.scss';
import { FaInfoCircle } from 'react-icons/fa';
import Button from '../../base-components/Button';
import { navigate } from '@reach/router';

function getPlanFeature(data) {
	const featuresArray = [];
	data.forEach(item => featuresArray.push(<PlanFeature key={item.id} featureName={item.title} />));
	return featuresArray;
}

function numberWithPeriod(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}



export default class PricingPlan extends React.Component {

	navigateToOrder = () => {
		navigate('/plans/order', {
			state: {
				order: this.props.features,
				title: this.props.title
			},
		}).then();
	};

	render() {
		return (
			<Flex className={`column ${styles.PricingPlan} ${this.props.className}`}>
				<Item>
					<h2 className="my-4 text-center">{this.props.title}</h2>
				</Item>
				<div className="w-100">{getPlanFeature(this.props.features)}</div>
				<h2 className="mt-4 text-center">{numberWithPeriod(this.props.price)} DKK</h2>
				<Button className="px-5" onClick={this.navigateToOrder}>Click</Button>
			</Flex>
		);
	}
}

export class PlanFeature extends React.Component {
	render() {
		return (
			<Item className={`px-1 my-1 mx-2 row ${styles.PlanFeature}`}>
				<p>{this.props.featureName}</p>
				<FaInfoCircle className="test" />
			</Item>
		);
	}
}
