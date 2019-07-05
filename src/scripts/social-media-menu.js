import React from "react"
import {
    StaticQuery,
    graphql
} from "gatsby"
import ReturnComponent from "../scripts/social-media-type.js"


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
            <ReturnComponent key={item.node.link} link={item.node.link}> {item.node.link}</ReturnComponent>
        )
    )
    return linksArray    
}


export default SocialMediaMenu