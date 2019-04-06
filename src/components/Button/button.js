import PropTypes from "prop-types"
import React from "react"

const Button = ({ buttonTitle }) => (
    <div className="button">
        <p>{buttonTitle}</p>
    </div>
)

Button.prototype = {
    buttonTitle: PropTypes.string
}

Button.defaultProps = {
    buttonTitle: `Click`
}

export default Button