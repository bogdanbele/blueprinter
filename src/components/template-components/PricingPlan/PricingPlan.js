import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import styles from './PricingPlan.module.scss';
import {FaInfoCircle} from 'react-icons/fa';
import Button from '../../base-components/Button';
import {navigate} from '@reach/router';

const getPlanFeature = data => {
    const featuresArray = [];
    data.forEach(item => featuresArray.push(<PlanFeature key={item.id} featureName={item.title}
                                                         featureDescription={item.excerpt.excerpt}/>));
    return featuresArray;
};

const numberWithPeriod = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

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
        console.log(this.props)
        return (

            <Flex className={`flex-column py-4 px-2 ${styles.PricingPlan} ${this.props.className}`}>
                <Item>
                    <h2 className="my-4 text-center">{this.props.title}</h2>
                </Item>
                <div className="w-100 mt-5">{getPlanFeature(this.props.features)}</div>
                <h2 className="mt-4 text-center">{numberWithPeriod(this.props.price)} DKK</h2>
                <Button className="px-5" onClick={this.navigateToOrder}>Click</Button>
            </Flex>
        );
    }
}

PricingPlan.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    feature: PropTypes.array,
    price: PropTypes.number
};

PricingPlan.defaultProps = {
    className: ''
};

export class PlanFeature extends React.Component {
    render() {
        return (
            <Item className={`px-1 my-1 mx-2 flex-column ${styles.PlanFeature}`}>
                <div className='flex-row d-flex justify-content-between position-relative'>
                    <p>{this.props.featureName}</p>
                    <FaInfoCircle/>
                    <span className={`mb-4 position-absolute ${styles.Hover}`}>{this.props.featureDescription}</span>
                </div>
            </Item>
        );
    }
}

PlanFeature.propTypes = {
    featureName: PropTypes.string.isRequired,
    featureDescription: PropTypes.string.isRequired
};
