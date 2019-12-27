import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import styles from './PricingPlan.module.scss';
import Button from '../../base-components/Button';
import {navigate} from '@reach/router';
import {PlanFeature} from '../PlanFeature/PlanFeature';

const getPlanFeature = data => {
	const featuresArray = [];
	data.forEach(item => featuresArray.push(<PlanFeature key={item.id} data={item}/>));
	return featuresArray;
};

const numberWithPeriod = x => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default class PricingPlan extends React.Component {
	navigateToOrder = () => {
		navigate('/plans/order', {
			state: {
				order: this.props.data.features,
				title: this.props.data.title,
			},
		}).then();
	};

	render() {
		const data = this.props.data;
		return (
			<Flex className={`flex-column pt-4 px-2 ${styles.PricingPlan} ${this.props.className}`}>
				<Item>
					<h1 className="my-4 text-center">{data.title}</h1>
				</Item>
				<div className="w-100 mt-5">{getPlanFeature(data.features)}</div>
				<h3 className="mt-4 text-center">from {numberWithPeriod(data.price)} DKK</h3>
				<Button className="px-5" onClick={this.navigateToOrder}>
					Click
				</Button>
			</Flex>
		);
	}
}

PricingPlan.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		title: PropTypes.string,
		feature: PropTypes.array,
		price: PropTypes.number,
	})
};

PricingPlan.defaultProps = {
	className: '',
	data : {
		title : '',
		feature : '',
		price : 10000
	}
};
