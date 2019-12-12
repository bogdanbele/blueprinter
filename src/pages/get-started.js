import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import ProcessSection from '../components/template-components/ProcessSection/ProcessSection';

export const query = graphql`
	{
		allContentfulPage(filter: { title: { eq: "Get Started" } }) {
			edges {
				node {
					title
					contentSections {
						__typename
						... on Node {
							... on ContentfulProcessStep {
								id
								bigHeader
								header
								subHeader
								content {
									content
								}
								image {
									id
									description
									fixed(width: 100, height: 100) {
										...GatsbyContentfulFixed
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

function getProcessSections(data) {
	const sectionsArray = [];
	console.log(data);
	data.allContentfulPage.edges[0].node.contentSections.forEach((item, index) =>
		sectionsArray.push(
			<ProcessSection
				key={item.id}
				content={item.content.content}
				bigHeader={item.bigHeader}
				header={item.header}
				imgSrc={item.image.fixed}
				imgAlt={item.image.description}
				subHeader={item.subHeader}
			/>
		)
	);
	return sectionsArray;
}

const GetStartedPage = ({ data }) => (
	<Layout className="alternating-row">
		<SEO title="Get Started" />
		{getProcessSections(data)}
	</Layout>
);
export default GetStartedPage;
