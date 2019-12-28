import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';

/**
 *
 * @param data
 * @returns {[]}
 */
const listToParagraph = data => {
	let linksArray = [];
	data.forEach(element => {
		linksArray.push(
			<p key={data.indexOf(element)} className="mb-0">
				{element}
			</p>
		);
	});
	return linksArray;
};

/**
 * Component for ContentfulMiniContent ( description is limited to 255 characters )
 * Data prop accepts an object which contains description[Strings], header[String], and list[Array]
 * @param props
 * @returns {*}
 * @constructor
 */
export default function MiniContent(props) {
	const data = props.data;
	let list = () => (data.list ? <>{listToParagraph(data.list)}</> : null);

	return (
		<Flex className={`flex-column ${props.flexClassName}`}>
			<h3>{data.header}</h3>
			<p>{data.description}</p>
			{list()}
		</Flex>
	);
}

MiniContent.propTypes = {
	data: PropTypes.shape({
		description: PropTypes.string,
		header: PropTypes.string,
		list: PropTypes.array,
	}),
	flexClassName: PropTypes.string,
};

MiniContent.defaultProps = {
	flexClassName: '',
	data: {
		description: '',
		header: '',
		list: [],
	},
};
