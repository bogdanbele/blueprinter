import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Image from '../../base-components/Image/Image';
import Item from '../../base-components/Item';

export default class TeamMember extends React.Component {
    render() {
        const sections = this.props.sections;
        const skills = this.props.skills;
        console.log(sections);
        return (
            <Flex className='flex-grow-1 flex--column'>
                <h1>{this.props.name}</h1>
                <Flex className='flex--0-padding flex--row--column'>
                    <Flex className='flex--row flex--0-padding'>
                        {sections.map((item, key) =>
                            <p key={key}>{item}</p>)}
                        <ul>
                            Area of expertise:
                            {skills.map((item, key) =>
                                <li key={key}>{item}</li>)}
                        </ul>
                    </Flex>
                    <Flex className='flex--2 flex-grow-1'>
                        <Image imgsrc={this.props.imgsrc}/>
                    </Flex>
                </Flex>
            </Flex>

        );
    }
}

TeamMember.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    sections: PropTypes.array,
};

