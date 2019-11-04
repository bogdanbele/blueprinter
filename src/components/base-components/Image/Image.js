import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from './Image.module.scss';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export default class Image extends React.Component {
	render() {
		return (
			<StaticQuery
				query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fixed(width: 300, height: 500) {
                    ...GatsbyImageSharpFixed
                  } 
                }
              }
            }
          }
        `}
				render={data => {
					return (
						<Img className={styles.Image} fixed={data.allImageSharp.edges.find(element => {
							// Match string after final slash
							return element.node.fixed.src.split('/').pop() === this.props.imgsrc;
						}).node.fixed} />
					);
				}}
			/>
		);
	}
}
