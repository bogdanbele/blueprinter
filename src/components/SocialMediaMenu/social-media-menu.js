import React from "react"
import {
    StaticQuery,
    graphql
} from "gatsby"
import SocialLinkIcon from "../SocialLinkIcon/social-link-icon.js"


const SocialMediaMenu = () => (
    <StaticQuery 
    query = {graphql` 
        query SocialMediaLinkQuery
        {
            allSocialMediaLinksJson {
                edges {
                    node {
                        link
                    }
                }
            }
        }
    `
}
render={data => (
    <div className="socialMenu">
      {getSocialLinks(data)}
    </div>
)}
/>)

function getSocialLinks(data){
    const linksArray = []
    data.allSocialMediaLinksJson.edges.forEach( item => 
        linksArray.push(
            <SocialLinkIcon key={item.node.link} link={item.node.link}> {item.node.link}</SocialLinkIcon>
        )
    )
    return linksArray    
}


export default SocialMediaMenu