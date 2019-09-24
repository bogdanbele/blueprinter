import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss'

// <Icon icon="FaTwitter">

//   <Icon><FaTwitter></Icon>


class Icon extends Component {
    render() {
        const {className, children} = this.props;
        return (
            <div className={`${styles.Icon}${className ? ` ${className}` : ''}`}>
                {children}
            </div>
        )
    }
}

Icon.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Icon.defaultProps = {
    className: "Icon"
}

export default Icon
