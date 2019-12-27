import Row from "../../base-components/Row";
import Flex from "../../base-components/Flex";
import PropTypes from 'prop-types';
import React from "react";
import wrapWithParagraph from "../../../utils/helpers/TextWrapper";
import Img from "gatsby-image";

export default function ProcessSection(props) {
    let bigHeader = () =>
        (props.bigHeader !== null) ? (
            <Flex className='flex-column text-center'>
                <h1>{props.bigHeader}</h1>
            </Flex>
        ) : null;

    let sectionIcon = () =>
        (typeof props.imgSrc !== 'undefined') ? (
            <Flex className='flex--100 justify-content-center'>
                <Img fixed={props.imgSrc} alt={props.imgAlt}/>
            </Flex>
        ) : null;

    const formattedContent = wrapWithParagraph(props.content);

    return (
        <Row className='flex-column' holderClass='w-100-vw'>
            {bigHeader()}
            {sectionIcon()}
            <Flex className='flex-column'>
                <h2>{props.header}</h2>
                {props.subHeader ? <h3>{props.subHeader}</h3> : null}
                {formattedContent}
            </Flex>
        </Row>
    )
}

ProcessSection.propTypes = {
    header: PropTypes.string,
    bigHeader: PropTypes.string,
    imgSrc: PropTypes.object,
    imgAlt: PropTypes.string,
    content: PropTypes.string,
    subHeader: PropTypes.string,
};

