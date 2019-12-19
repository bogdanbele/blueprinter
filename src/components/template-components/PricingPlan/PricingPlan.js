import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import styles from './PricingPlan.module.scss';
import {FaInfoCircle} from 'react-icons/fa'

function getPlanFeature(data){
	const featuresArray = [];
	console.log(data)
	data.forEach(item =>
		featuresArray.push(<PlanFeature
			key={item.id}
		featureName={item.title} />)
		)
	return featuresArray
}

export default class PricingPlan extends React.Component {
	render() {
		console.log(this.props.features);
		return (
			<Flex className={`column ${styles.PricingPlan} ${this.props.className}`}>
				<Item>
					<h2 className="my-4 text-center">{this.props.title}</h2>
				</Item>
				{getPlanFeature(this.props.features)}
				<h2 className="mt-4 text-center">{this.props.price} dkk</h2>
			</Flex>
		);
	}
}

class PlanFeature extends React.Component {
	render() {
		return (
			<Item className={`px-1 my-1 mx-2 row ${styles.PlanFeature}`}>
				<p>{this.props.featureName}</p>
				<FaInfoCircle className='test'/>
			</Item>
		);
	}
}
