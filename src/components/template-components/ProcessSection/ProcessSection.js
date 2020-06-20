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
	const data = props.data;
	const pageHeader = data.bigHeader;
	const sectionHeader = data.header;
	const subHeader = data.subHeader;
	const imageSrc = data.image.fixed;
	const imageAlt = data.image.description;
	const content = data.content.content;

	console.log(content)

	let bigHeader = () =>
		pageHeader !== null ? (
			<Flex className="flex-column text-center">
				<h1>{pageHeader}</h1>
			</Flex>
		) : null;

	let sectionIcon = () =>
		typeof imageSrc !== 'undefined' ? (
			<Img fixed={imageSrc} alt={imageAlt}/>
		) : null;

	const formattedContent = wrapWithParagraph(content);

	return (
		<Row className="flex-column" holderClass="w-100-vw">
			{bigHeader()}
			<Flex className="flex-md-row flex-column justify-content-around align-items-center">
				{sectionIcon()}
				<div className='col-12 col-md-10'>
					<h2>{sectionHeader}</h2>
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
		header: PropTypes.string,
		subHeader: PropTypes.string,
		bigHeader: PropTypes.string,
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
