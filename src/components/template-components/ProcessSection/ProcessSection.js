import Row from '../../base-components/Row';
import Flex from '../../base-components/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import wrapWithParagraph from '../../../utils/helpers/TextWrapper';
import Img from 'gatsby-image';

/**
 * Component for ContentfulProcessSection
 * @param props
 * @returns {*}
 * @constructor
 */
export default function ProcessSection(props) {
	const {bigHeader, header, subHeader, image, content} = props.data;

	const imageSrc = image.fixed;
	const imageAlt = image.description;
	const nestedContent = content.content;

	let pageHeader = () =>
		bigHeader !== null ? (
			<Flex className="flex-column text-center">
				<h1>{bigHeader}</h1>
			</Flex>
		) : null;

	let sectionIcon = () =>
		typeof imageSrc !== 'undefined' ? (
			<Img fixed={imageSrc} alt={imageAlt}/>
		) : null;

	const formattedContent = wrapWithParagraph(nestedContent);

	return (
		<Row className="flex-column" holderClass="w-100-vw">
			{pageHeader()}
			<Flex className="flex-md-row flex-column justify-content-around align-items-center">
				{sectionIcon()}
				<div className='col-12 col-md-10'>
					<h2>{header}</h2>
					{subHeader ? <h3>{subHeader}</h3> : null}
					{formattedContent}
				</div>
			</Flex>
		</Row>
	);
}

ProcessSection.propTypes = {
	data: PropTypes.shape({
		content: PropTypes.shape({
			content: PropTypes.string,
		}),
		bigHeader: PropTypes.string,
		header: PropTypes.string,
		subHeader: PropTypes.string,
		image: PropTypes.shape({
			fixed: PropTypes.obj,
			description: PropTypes.string,
		}),
	}),
};

PropTypes.defaultProps = {
	data: {
		content: {
			content: ''
		},
		header: '',
		subHeader: '',
		image: {
			description: 'content section image'
		}
	}
};
