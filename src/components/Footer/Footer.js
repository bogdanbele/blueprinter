import React from "react";
import {
    graphql, StaticQuery
} from "gatsby"
import styles from './Footer.module.scss';
import SocialLinkIcon from "../base-components/SocialLinkIcon";

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
    render={data => (
        <div className={styles.socialMenu}>
            {getSocialLinks(data)}
        </div>
    )}
/>;

function getSocialLinks(data) {
    const linksArray = []
    data.allSocialMediaLinksJson.edges.forEach(item =>
        linksArray.push(
            <SocialLinkIcon key={item.node.link} link={item.node.link}> {item.node.link}</SocialLinkIcon>
        )
    )
    return linksArray
}

export default class Footer extends React.PureComponent {

    render() {
        return (
            <footer>
               {staticQuery}
                <p>
                    © ncweb {new Date().getFullYear()}
                    {` `}
                </p>
            </footer>
        )
    }
}
