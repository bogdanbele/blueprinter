import PropTypes from "prop-types"
import React from "react"

function mapModifiers(...modifiers) {
    return modifiers.map(item => {
        return item.modifiers.split(" ").map(element => {
                if (element === item.modifiers) {
                    return null
                } else {
                    return ` button--${element}`
                }
            }
        ).join(" ")
    })
}


const Button = ({buttonTitle, ...modifiers}) => (
    <div className={`button`+ mapModifiers(modifiers)}>
        {buttonTitle}
    </div>
)

Button.prototype = {
    buttonTitle: PropTypes.string,
    modifiers: PropTypes.string
}

Button.defaultProps = {
    buttonTitle: `Click`,
    modifiers: 'button'
}

export default Button