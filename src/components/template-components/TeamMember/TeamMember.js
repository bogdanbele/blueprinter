import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Image from '../../base-components/Image/Image';
import styles from './TeamMember.module.scss'
import Item from '../../base-components/Item';

export default class TeamMember extends React.Component {
    render() {
        const sections = this.props.sections;
        const skills = this.props.skills;

        // Alternate between image on the left and image on the right
        let order = '';
        (this.props.index%2 !== 0) ? order = ' flex--row--column__reversed' : order = ' flex--row--column';

        return (
            <Flex className='flex-grow-1 column'>
                <h1>{this.props.name}</h1>
                <Flex className={styles.TeamMember + order}>
                    <Flex className='column'>
                        {sections.map((item, key) =>
                            <p key={key}>{item}</p>)}
                        <br/>
                        <h2>Area of expertise:</h2>
                        <ul>
                            {skills.map((item, key) =>
                                <li key={key}>{item}</li>)}
                        </ul>
                    </Flex>
                    <Flex className={'flex--2'}>
                        <Image
                            imgsrc={this.props.imgsrc}/>
                    </Flex>
                </Flex>
            </Flex>

        );
    }
}

TeamMember.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    sections: PropTypes.array,
    skills: PropTypes.array
};

