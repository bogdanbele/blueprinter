import Row from "../../base-components/Row";
import Flex from "../../base-components/Flex";
import PropTypes from 'prop-types';
import React from "react";
import wrapWithParagraph from "../../../utils/helpers/TextWrapper";

export default class ProcessSection extends React.PureComponent {
    render() {
        let bigHeader = () =>
            (this.props.bigHeader !== null) ? (
            bigHeader = <Flex className='column flex--text-center'>
                <h1>{this.props.bigHeader}</h1>
            </Flex>
            ) : null;

        const formatedContent = wrapWithParagraph(this.props.content);

        return (
            <Row className='column'>
                {bigHeader()}
                <Flex className='column'>
                    <h2>{this.props.header}</h2>
                    <h3>{this.props.subHeader}</h3>
                    {formatedContent}
                </Flex>
            </Row>
        )
    }
}

ProcessSection.propTypes = {
    header: PropTypes.string,
    bigHeader: PropTypes.string,
    subHeader: PropTypes.string,
};

