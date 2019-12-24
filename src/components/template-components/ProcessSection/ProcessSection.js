import Row from "../../base-components/Row";
import Flex from "../../base-components/Flex";
import PropTypes from 'prop-types';
import React from "react";
import wrapWithParagraph from "../../../utils/helpers/TextWrapper";
import Img from "gatsby-image";

export default class ProcessSection extends React.PureComponent {
    render() {
        let bigHeader = () =>
            (this.props.bigHeader !== null) ? (
                <Flex className='flex-column text-center'>
                    <h1>{this.props.bigHeader}</h1>
                </Flex>
            ) : null;

        let sectionIcon = () =>
            (typeof this.props.imgSrc  !== 'undefined') ? (
                <Flex className='flex--100 justify-content-center'>
                    <Img fixed={this.props.imgSrc} alt={this.props.imgAlt}/>
                </Flex>
            ) : null;

        const formattedContent = wrapWithParagraph(this.props.content);

        return (
            <Row className='flex-column px-5'>
                {bigHeader()}
                {sectionIcon()}
                <Flex className='flex-column'>
                    <h2>{this.props.header}</h2>
                    <h3>{this.props.subHeader}</h3>
                    {formattedContent}
                </Flex>
            </Row>
        )
    }
}

ProcessSection.propTypes = {
    header: PropTypes.string,
    bigHeader: PropTypes.string,
    imgSrc: PropTypes.object,
    imgAlt: PropTypes.string,
    content: PropTypes.string,
    subHeader: PropTypes.string,
};

