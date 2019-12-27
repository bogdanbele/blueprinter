import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import styles from './TeamMember.module.scss';
import Img from 'gatsby-image';
import wrapWithParagraph from '../../../utils/helpers/TextWrapper';

export default class TeamMember extends React.Component {
	render() {
	    const data = this.props.data;
		const skills = data.skills;
		const name = data.name;
        const formattedDescription = wrapWithParagraph(data.description.description);
        const imageSrc = data.image.fixed;
        const imageAlt = data.image.description;


        // Alternate between image on the left and image on the right
		let order = () =>
			this.props.index % 2 !== 0 ? ' flex--row--column__reversed' : ' flex--row--column';

		return (
			<Flex className="w-100 flex-column">
				<h1>{name}</h1>
				<Flex className={styles.TeamMember + order()}>
					<Flex className="flex-column px-2">
						{formattedDescription}
						<br/>
						<h2>Area of expertise:</h2>
						<ul>
							{skills.map((item, key) => (
								<li key={key}>{item}</li>
							))}
						</ul>
					</Flex>
					<Flex className="flex--2 mx-auto">
						<Img fixed={imageSrc} alt={imageAlt}/>
					</Flex>
				</Flex>
			</Flex>
		);
	}
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
