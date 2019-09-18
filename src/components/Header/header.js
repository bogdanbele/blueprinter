import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "../Menu/menu"

const Header = ({siteTitle}) => (
    <header
        className="theme"
    >
        <div
            className="header-holder"
            style={{
                maxWidth: 960,
                padding: `0.45rem 1.0875rem`,
            }}
        >
            <h3 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h3>
        </div>
        <Menu/>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
