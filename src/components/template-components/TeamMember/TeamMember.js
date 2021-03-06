import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import styles from './TeamMember.module.scss';
import Img from 'gatsby-image';
import wrapWithParagraph from '../../../utils/helpers/TextWrapper';
import ScrollAnimation from "react-animate-on-scroll";

/**
 * Component for ContentfulTeamMember
 * Data prop accepts an objects which contains name[String], description[Object] { description[String]}
 * image[Object]{fixed[Object],description[String]}
 * @param props
 * @returns {*}
 * @constructor
 */
export default function TeamMember(props) {
	const data = props.data;

	const id = data.id;
	const name = data.name;
	const formattedDescription = wrapWithParagraph(data.description.description);
	const skills = data.skills;

	const imageSrc = data.image.fixed;
	const imageAlt = data.image.description;

	// Alternate between image on the left and image on the right
	let order = () =>
		props.index % 2 !== 0 ? ' flex--row--column__reversed' : ' flex--row--column';

	let alternatingMargin = () =>
		props.index % 2 !== 0 ? ' ml-md-3' : ' mr-md-3';

	let alternativeFade = () =>
		props.index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight';

	return (
		<ScrollAnimation
			animateOnce={true}
			className={'d-flex w-100'}
			animateIn={alternativeFade()}
			offset={250}
			key={id}
		>
			<Flex className="w-100 flex-column">
				<h1>{name}</h1>
				<Flex className={styles.TeamMember + order()}>
					<Flex className={"flex-column px-2" + alternatingMargin()}>
						<h2>Area of expertise:</h2>
						<ul>
							{skills.map((item, key) => (
								<li key={key}>{item}</li>
							))}
						</ul>
						<br/>
						{formattedDescription}
					</Flex>
					<Flex className="flex--2 mx-auto">
						<Img fixed={imageSrc} alt={imageAlt}/>
					</Flex>
				</Flex>
			</Flex>
		</ScrollAnimation>
	);
}

TeamMember.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.shape({
			description: PropTypes.string
		}),
		image: PropTypes.shape({
			fixed: PropTypes.object,
			description: PropTypes.string
		}),
		skills: PropTypes.array,
	}),
};
