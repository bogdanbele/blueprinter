import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import PageHeader from '../components/template-components/PageHeader';
import PricingPlan from '../components/template-components/PricingPlan/PricingPlan';
import Row from '../components/base-components/Row';

function getPricingPlans(data) {
	const pricingPlansArray = [];

	data.allContentfulPage.edges[0].node.contentSections.forEach((item, index) =>
        pricingPlansArray.push(<PricingPlan 
            className='flex--3' key={item.id} title={item.title} />)
	);

	return pricingPlansArray;
}

const PricingPage = ({ data }) => {
	const page = data.allContentfulPage.edges[0].node;

	console.log(page);
	return (
		<Layout>
			<SEO title="Pricing plans" />
			<PageHeader
				header={page.header}
				headerText={page.headerText}
				isHeaderVisible={page.isHeaderVisible}
				isHeaderTextVisible={page.isHeaderTextVisible}
			/>
            <Row>
            {getPricingPlans(data)}
            </Row>
		</Layout>
	);
};

export const query = graphql`
	{
		allContentfulPage(filter: { title: { eq: "Pricing" } }) {
			edges {
				node {
					title
					headerText
					header
					isHeaderTextVisible
					isHeaderVisible
					contentSections {
						... on ContentfulPricingPlan {
							id
							title
							features {
								title
								excerpt {
									excerpt
									id
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default PricingPage;
