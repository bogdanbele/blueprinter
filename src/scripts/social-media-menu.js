import React from "react"
import {
    StaticQuery,
    graphql
} from "gatsby"

function dog() {
    return <StaticQuery query = {
    graphql ` 
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
render={pages => (
console.log(pages)
)
}
/>}


export default dog