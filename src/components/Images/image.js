import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import style from './Image.module.scss';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
            <StaticQuery
                query={query}
                render={data =>
                    <div className={style.ImageHolder} >
                        <Img fluid={data.image.childImageSharp.fluid}/>
                    </div>
                }
            />);


const query = graphql`
      query {
        image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
           ...squareImage
        }
      }
`;

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 150) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default Image
