import React from 'react';
import {graphql, StaticQuery,} from 'gatsby';
import styles from './Footer.module.scss';
import SocialLinkIcon from '../../base-components/SocialLinkIcon';
import FooterMenu from "../FooterMenu/FooterMenu";

let staticQuery = <StaticQuery
	query={graphql` {
            allSocialMediaLinksJson {
                edges {
                    node {
                        link
                    }
                }
            }
        }
    `}
	render={data =>
		<div className={styles.socialMenu}>
			{getSocialLinks(data)}
		</div>
	}
/>;

const getSocialLinks = (data) =>{
	const linksArray = [];
	// noinspection JSUnresolvedVariable
	data.allSocialMediaLinksJson.edges.forEach(item =>
		linksArray.push(
			<SocialLinkIcon key={item.node.link} link={item.node.link}> {item.node.link}</SocialLinkIcon>
		)
	);
	return linksArray;
};

export default function Footer() {
	return (
		<footer>
			{staticQuery}
			<p>
				© ncweb {new Date().getFullYear()}
				{' '}
			</p>
			<FooterMenu/>
		</footer>
	);
}
