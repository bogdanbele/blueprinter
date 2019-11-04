import React, {Component} from "react";
import PropTypes from 'prop-types';
import Flex from "../base-components/Flex";
import Image from "../base-components/Image/Image";

export default class Teammate extends React.Component {
    render() {
        return (
            <Flex key={this.props.id}>
                <Image imgsrc={this.props.imgsrc} />
            </Flex>
        )
    }
}

Teammate.propTypes = {
    imgsrc: PropTypes.String.isRequired
}

