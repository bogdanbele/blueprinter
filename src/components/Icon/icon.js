import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {mapClasses} from '../../scripts/helpers'


 // <Icon icon="FaTwitter">

 //   <Icon><FaTwitter></Icon>


class Icon extends Component {
    render(){
        const {className,children} = this.props;
        return(
            <div className = {mapClasses(className, "icon")}>
                {children}
            </div>
            )
    }
}

Icon.propTypes = {
    children : PropTypes.node.isRequired,
    className : PropTypes.string
}

Icon.defaultProps = {
    className: "icon"
}

export default Icon