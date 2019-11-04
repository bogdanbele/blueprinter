import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Image from '../../base-components/Image/Image';
import Item from '../../base-components/Item';

export default class TeamMember extends React.Component {
	render() {
		const sections = this.props.sections;
		console.log(sections);
		return (
			<Flex>
				<Flex>
					<Item>
						<h1>{this.props.name}</h1>
						{sections.map((item,key) =>
							<p key={key}>{item}</p>)}
					</Item>
				</Flex>
				<Flex>
					<Image imgsrc={this.props.imgsrc} />
				</Flex>
			</Flex>
		);
	}
}

TeamMember.propTypes = {
	imgsrc: PropTypes.string.isRequired,
	sections: PropTypes.array,
};

