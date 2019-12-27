import React from "react";
import Flex from "../../base-components/Flex";
import Item from "../../base-components/Item";
import Row from "../../base-components/Row";
import wrapWithParagraph from "../../../utils/helpers/TextWrapper";

/**
 *
 */
export default class ContentSection extends React.Component {

    render() {
        const data = this.props.data;
        const wrappedParagraph = data.content.content ? wrapWithParagraph(data.content.content) : '';

        return (
            <Row
                {...this.props}
                holderClass='w-100-vw'
                className="justify-content-center Row--header"
            >
                <Flex className="flex--1">
                    <Item>
                        <h1>{data.header}</h1>
                        {wrappedParagraph}
                    </Item>
                </Flex>
            </Row>
        )
    }
}