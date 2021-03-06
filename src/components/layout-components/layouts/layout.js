/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
require('typeface-quicksand');
require('typeface-roboto');

import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import styles from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            <div className={styles.Content}>
                <main>{props.children}
                    <link rel="preconnect" href={"https://www.google-analytics.com"}/>
                    <link rel="preconnect" href={"https://stats.g.doubleclick.net"}/> </main>
                <Footer/>
            </div>
        </>)
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Layout;
