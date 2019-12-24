import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import styles from './TeamMember.module.scss'
import Img from 'gatsby-image';
import wrapWithParagraph from '../../../utils/helpers/TextWrapper';

export default class TeamMember extends React.Component {

    render() {
        const skills = this.props.skills;
        // Alternate between image on the left and image on the right
        let order = () =>
            (this.props.index % 2 !== 0) ? ' flex--row--column__reversed' : ' flex--row--column';

        const formattedDescription = wrapWithParagraph(this.props.description);

        return (
            <Flex className='flex-grow-1 flex-column'>
                <h1>{this.props.name}</h1>
                <Flex className={styles.TeamMember + order()}>
                    <Flex className='flex-column px-2'>
                        {formattedDescription}
                        <br/>
                        <h2>Area of expertise:</h2>
                        <ul>
                            {skills.map((item, key) =>
                                <li key={key}>{item}</li>)}
                        </ul>
                    </Flex>
                    <Flex className='flex--2 mx-auto'>
                        <Img fixed={this.props.imgsrc} alt={this.props.imgalt}/>
                    </Flex>
                </Flex>
            </Flex>
        );
    }
}

TeamMember.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imgalt: PropTypes.string,
    imgsrc: PropTypes.object,
    skills: PropTypes.array
};

