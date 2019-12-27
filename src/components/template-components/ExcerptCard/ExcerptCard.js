import React from 'react';
import Flex from '../../base-components/Flex';
import PropTypes from 'prop-types';
import Icon from '../../base-components/Icon';
import Item from '../../base-components/Item';
import Button from '../../base-components/Button';
import wrapWithParagraph from "../../../utils/helpers/TextWrapper";

export default function ExcerptCard(props) {
    const data = props.data;
    const wrappedParagraph = wrapWithParagraph(data.excerpt.excerpt);

    let displayIcon = () =>
        (typeof props.icon !== 'undefined') ? (
            <Flex className="justify-content-center">
                <Icon>
                    <img
                        alt={getImageAltText(props.icon)}
                        src={props.icon}
                    />
                </Icon>
            </Flex>
        ) : null;

    let button = () =>
        (props.isButtonEnabled === true) ?
            (<Button onClick={props.buttonOnClick}>{props.buttonText}</Button>
            ) : null;

    return (
        <Flex className={props.flexClasses}>
            <Item>
                {displayIcon()}
                <h2>{data.header}</h2>
                {wrappedParagraph}
                {button()}
            </Item>
        </Flex>
    );
}

function getImageAltText(string) {
    return string + ' icon';
}

ExcerptCard.propTypes = {
    data: PropTypes.shape({
        excerpt: PropTypes.shape({
            excerpt: PropTypes.string
        }),
        header: PropTypes.string
    }),
    icon: PropTypes.string,
    flexClasses: PropTypes.string,
    isButtonEnabled: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonOnClick: PropTypes.func,
};

ExcerptCard.defaultProps = {
    buttonText: 'Read More',
    isButtonEnabled: true,
    data : {
        excerpt : {
            excerpt : ''
        },
        header : ''
    }
};
