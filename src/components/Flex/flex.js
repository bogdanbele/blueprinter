import React, { Component }  from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../../scripts/helpers";

class Flex extends Component {
  render() {
      const {className, children} = this.props
    return <div className={mapClasses(className, "flex")}>{children}</div>;
  }
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

Flex.defaultProps = {
  className: "flex"
}

export default Flex;
