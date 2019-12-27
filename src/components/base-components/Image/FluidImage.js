import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styles from './Image.module.scss';

export default function FluidImage(props) {
	return (
		<StaticQuery
			query={graphql`
					query {
						allImageSharp {
							edges {
								node {
									fluid(maxWidth: 1200, maxHeight: 800) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				`}
			render={data => {
				// noinspection JSUnresolvedVariable
				return (
					<Img
						className={`${styles.Image} ${props.className}`}
						fluid={
							data.allImageSharp.edges.find(element => {
								return element.node.fluid.src.split('/').pop() === props.imgsrc;
							}).node.fluid
						}
					/>
				);
			}}
		/>
	);
}
