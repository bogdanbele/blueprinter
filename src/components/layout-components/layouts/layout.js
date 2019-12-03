/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import './layout.scss';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {FaToggleOn} from "react-icons/fa";
import {GlobalStateContext} from "../../context-components/GlobalContextProvider";

require('typeface-quicksand');
require('typeface-roboto');

const Layout = ({children}) =>{
    const state = useContext(GlobalStateContext);
    console.log(state)
    return(
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
		render={data =>
			<>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div className={styles.Content}>
					<main className={styles.main}>{children}</main>
					<Footer />
				</div>
			</>
		}
	/>)
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
