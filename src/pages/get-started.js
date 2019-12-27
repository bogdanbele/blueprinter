import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import ProcessSection from '../components/template-components/ProcessSection/ProcessSection';
import PageHeader from '../components/template-components/PageHeader';

const getProcessSections = (data) => {
    const sectionsArray = [];
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
};

const GetStartedPage = ({data}) => {
    const page = data.allContentfulPage.edges[0].node;

    return (
        <Layout className="alternating-row">
            <SEO title="Get Started"/>
            <PageHeader
	            data={page}
            />
            {getProcessSections(data)}
        </Layout>
    )
};

export const query = graphql`
	{
		allContentfulPage(filter: { title: { eq: "Get Started" } }) {
			edges {
				node {
                    title
                    headerText
					header
					isHeaderTextVisible
					isHeaderVisible
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

export default GetStartedPage;
