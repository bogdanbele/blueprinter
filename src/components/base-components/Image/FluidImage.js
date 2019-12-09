import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Image.module.scss';

export default class FluidImage extends React.Component {
	render() {
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
							className={`${styles.Image} ${this.props.className}`}
							fluid={
								data.allImageSharp.edges.find(element => {
									return element.node.fluid.src.split('/').pop() === this.props.imgsrc;
								}).node.fluid
							}
						/>
					);
				}}
			/>
		);
	}
}
