import PropTypes from "prop-types"
import React, { Component } from 'react';
import { mapClasses } from "../../scripts/helpers"

class Button extends Component {

    render(){
        const {buttonTitle,className} = this.props;
        return(
            <button className={mapClasses(className, "button")}>
               {buttonTitle}
            </button>
        )
    }
}


Button.prototypes = {
    buttonTitle: PropTypes.string,
    className: PropTypes.string
}

Button.defaultProps = {
    buttonTitle: `Click`,
    className: "button"
}

export default Button