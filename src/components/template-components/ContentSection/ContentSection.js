import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Item from '../../base-components/Item';
import Row from '../../base-components/Row';
import wrapWithParagraph from '../../../utils/helpers/TextWrapper';
import ScrollAnimation from "react-animate-on-scroll";

/**
 *  Component for ContentfulContentSection.
 *  Data Prop accepts an object which contains the {header} and
 *  {content.content} keys
 */
export default class ContentSection extends React.Component {
	render() {
		const data = this.props.data;
		const wrappedParagraph = data.content.content ? wrapWithParagraph(data.content.content) : '';
		const contentHeader = data.header ? data.header : '';

		return (
			<ScrollAnimation
				initiallyVisible={this.props.isInitiallyVisible}
				animateOnce={true}
				className={'d-flex w-100'}
				animateIn={this.props.animateIn}
				offset={300}
				key={data.id}
			>
			<Row {...this.props} holderClass="w-100-vw" className={"pb-0 justify-content-center Row--header " + this.props.className} >
				<Flex className="flex--70">
					<Item>
						{(this.props.isHeaderVisible) ? <h1>{contentHeader}</h1> : null }
						{wrappedParagraph}
					</Item>
				</Flex>
			</Row>
			</ScrollAnimation>
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
	isHeaderVisible: PropTypes.bool,
	animateIn: PropTypes.string,
	isInitiallyVisible: PropTypes.bool
};

ContentSection.defaultProps = {
	isHeaderVisible: true,
	animateIn: 'none',
	isInitiallyVisible: true
};
