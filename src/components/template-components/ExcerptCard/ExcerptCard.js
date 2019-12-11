import React from 'react';
import Flex from '../../base-components/Flex';
import PropTypes from 'prop-types';
import handshakeSVG from '../../../utils/svgs/029-handshake.svg';
import handSVG from '../../../utils/svgs/025-hand.svg';
import thoughtSVG from '../../../utils/svgs/005-thought.svg';
import Icon from '../../base-components/Icon';
import Item from '../../base-components/Item';
import Button from '../../base-components/Button';

function getLocalIcon(string) {
	switch (string) {
		case 'handshake': {
			return handshakeSVG;
		}
		case 'hand': {
			return handSVG;
		}
		case 'thought': {
			return thoughtSVG;
		}
		default: {
			break;
		}
	}
}

function getImageAltText(string) {
	return string + ' icon';
}

export default class ExcerptCard extends React.PureComponent {
	render() {
		let displayIcon;
		if (this.props.iconString !== null) {
			displayIcon = (
				<Flex className="centered">
					<Icon>
						<img
							alt={getImageAltText(this.props.iconString)}
							src={getLocalIcon(this.props.iconString)}
						/>
					</Icon>
				</Flex>
			);
		}

		let button;
		if (this.props.isButtonEnabled === true) {
			button = <Button onClick={this.props.buttonOnClick}>{this.props.buttonText}</Button>;
		}

		return (
			<Flex className={this.props.flexClasses}>
				<Item>
					{displayIcon}
					<h2>{this.props.header}</h2>
					{this.props.excerpt}
					{button}
				</Item>
			</Flex>
		);
	}
}

ExcerptCard.propTypes = {
	iconString: PropTypes.string,
	flexClasses: PropTypes.string,
	isButtonEnabled: PropTypes.bool,
	buttonText: PropTypes.string,
	buttonOnClick: PropTypes.func,
};

ExcerptCard.defaultProps = {
	buttonText: 'Read More',
};
