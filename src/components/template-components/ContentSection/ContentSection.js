import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import Row from '../../base-components/Row';
import wrapWithParagraph from '../../../utils/helpers/TextWrapper';

/**
 *  Component for ContentfulContentSection.
 *  Data Prop accepts an object which contains the {header} and
 *  {content.content} keys, as returned by the back-end.
 */
export default class ContentSection extends React.Component {
	render() {
		const data = this.props.data;
		const wrappedParagraph = data.content.content ? wrapWithParagraph(data.content.content) : '';
		const contentHeader = data.header ? data.header : '';

		return (
			<Row {...this.props} holderClass="w-100-vw" className="justify-content-center Row--header">
				<Flex className="flex--1">
					<Item>
						<h1>{contentHeader}</h1>
						{wrappedParagraph}
					</Item>
				</Flex>
			</Row>
		);
	}
}

ContentSection.propTypes = {
	data: PropTypes.shape({
		content: PropTypes.shape({
			content: PropTypes.string.isRequired,
		}),
		header: PropTypes.string,
	}),
};
