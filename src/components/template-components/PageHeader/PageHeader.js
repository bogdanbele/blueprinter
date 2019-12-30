import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Row from '../../base-components/Row';

/**
 * PageHeader component, accepts an [data] prop object that can contain
 *  [header, isHeaderVisible, headerText, isHeaderTextVisible] keys
 * @param props
 * @returns {*}
 * @constructor
 */
export default function PageHeader(props) {
	const data = props.data;

	let header = () => (data.isHeaderVisible ? <h1>{data.header}</h1> : null);
	let headerText = () => (data.isHeaderTextVisible ? <h3>{data.headerText}</h3> : null);
	let isFlexVisible = () =>
		data.isHeaderVisible && data.isHeaderTextVisible ? (
			<Flex className="flex-column text-center">
				{header()}
				{headerText()}
			</Flex>
		) : null;

	return <Row className={`Row--header ${props.rowClassName}`}>{isFlexVisible()}{props.children}</Row>;
}

PageHeader.propTypes = {
	data: PropTypes.shape({
		header: PropTypes.string,
		headerText: PropTypes.string,
		isHeaderVisible: PropTypes.bool,
		isHeaderTextVisible: PropTypes.bool,
	}),
	rowClassName: PropTypes.string,
};

PageHeader.defaultProps = {
	rowClassName: '',
	data: {
		header: '',
		headerText: '',
		isHeaderVisible: false,
		isHeaderTextVisible: false,
	},
};
