import React, { Component }  from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../../scripts/helpers";

class Item extends Component {

    render() {
        const {className, children} = this.props
        return (
            <div className={mapClasses(className, "item")}>{children}</div>
        )
    }
}

Item.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Item.defaultProps = {
    className : "item"
}

export default Item