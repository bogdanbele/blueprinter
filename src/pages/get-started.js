import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import ProcessSection from '../components/template-components/ProcessSection/ProcessSection';
import PageHeader from '../components/template-components/PageHeader';
import ScrollAnimation from 'react-animate-on-scroll';

const getProcessSections = (data) => {
    const sectionsArray = [];
    data.allContentfulPage.edges[0].node.contentSections.forEach((item, index) =>
        sectionsArray.push(
        	<ScrollAnimation
		        className={'d-flex w-100'}
		        animateIn="fadeInDown"
		        animateOnce={true}
		        animateOut="pulse"
		        offset={250}
		        key={item.id}
	        >
	        <ProcessSection
	            data={item}
            />
	        </ScrollAnimation>
        )
    );
    return sectionsArray;
};

const GetStartedPage = ({data}) => {
    const page = data.allContentfulPage.edges[0].node;

    return (
        <Layout>
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
