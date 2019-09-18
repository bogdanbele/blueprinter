import React from "react";
import {
    graphql, StaticQuery
} from "gatsby"
import {SocialLinkIcon} from "blueprint-components-react";


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
        <div className="socialMenu">
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
                <div>
                    © Bogdan Bele {new Date().getFullYear()}
                    {` `}
                </div>
            </footer>
        )
    }
}
