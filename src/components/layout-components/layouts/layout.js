/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

require('typeface-quicksand');
require('typeface-roboto');

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            <div className={styles.Content}>
                <main className={`${props.className}`}>{props.children}</main>
                <Footer/>
            </div>
        </>)
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Layout;
