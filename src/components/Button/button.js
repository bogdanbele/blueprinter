import PropTypes from "prop-types"
import React from "react"
import { mapClasses } from "../../scripts/helpers"

const Button = ({buttonTitle,className}) => (
    <div className={mapClasses(className, "button")}>
        {buttonTitle}
    </div>
)

Button.prototype = {
    buttonTitle: PropTypes.string,
    className: PropTypes.string
}

Button.defaultProps = {
    buttonTitle: `Click`,
    className: "button"
}

export default Button