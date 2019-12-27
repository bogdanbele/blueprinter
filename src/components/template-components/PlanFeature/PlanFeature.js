import Item from "../../base-components/Item";
import styles from "../PricingPlan/PricingPlan.module.scss";
import {FaInfoCircle} from "react-icons/fa";
import PropTypes from "prop-types";
import React from "react";

export function PlanFeature(props) {
	const data = props.data;
	return (
		<Item className={`px-1 my-1 mx-2 flex-column ${styles.PlanFeature}`}>
			<div className='flex-row d-flex justify-content-between position-relative'>
				<p>{data.title}</p>
				<FaInfoCircle/>
				<span className={`mb-4 position-absolute ${styles.Hover}`}>{data.excerpt.excerpt}</span>
			</div>
		</Item>
	);
}

PlanFeature.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		excerpt: PropTypes.shape({
			excerpt: PropTypes.string.isRequired
		})
	})
};

PlanFeature.defaultProps = {
	data : {
		title : '',
		excerpt: {
			excerpt : ''
		}
	}
}

