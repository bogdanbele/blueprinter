import React from 'react';
import Flex from '../../base-components/Flex';
import PropTypes from 'prop-types';
import Icon from '../../base-components/Icon';
import Item from '../../base-components/Item';
import Button from '../../base-components/Button';

function getImageAltText(string) {
    return string + ' icon';
}

export default class ExcerptCard extends React.PureComponent {
    render() {
        let displayIcon = () =>
            (typeof this.props.icon !== 'undefined') ? (
                <Flex className="centered">
                    <Icon>
                        <img
                            alt={getImageAltText(this.props.icon)}
                            src={this.props.icon}
                        />
                    </Icon>
                </Flex>
            ) : null;

        let button = () =>
            (this.props.isButtonEnabled === true) ?
                (<Button onClick={this.props.buttonOnClick}>{this.props.buttonText}</Button>
                ) : null;

        return (
            <Flex className={this.props.flexClasses}>
                <Item>
                    {displayIcon()}
                    <h2>{this.props.header}</h2>
                    {this.props.excerpt}
                    {button()}
                </Item>
            </Flex>
        );
    }
}

ExcerptCard.propTypes = {
    header: PropTypes.string,
    icon: PropTypes.string,
    flexClasses: PropTypes.string,
    isButtonEnabled: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonOnClick: PropTypes.func,
};

ExcerptCard.defaultProps = {
    buttonText: 'Read More',
    isButtonEnabled: true
};
