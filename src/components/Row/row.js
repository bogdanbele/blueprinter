import React, { Component }  from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../../scripts/helpers";

class Row extends Component {
    render() {
        const {className, children} = this.props
        return <div className={mapClasses(className, "row")}>{children}</div>;
    }
}

Row.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Row.defaultProps = {
    className : "row"
}

export default Row