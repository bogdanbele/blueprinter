import React, { useEffect, useState } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../../components/layout-components/layouts/layout';
import SEO from '../../components/base-components/seo';
import PageHeader from '../../components/template-components/PageHeader';
import Row from '../../components/base-components/Row';

const OrderPage = ({ data }) => {
	const page = data.allContentfulPage.edges[0].node;

	const [selectedPlans, setSelectedPlans] = useState([]);
	const [allPlans, setAllPlans] = useState([]);

	useEffect(() => {
		if (window.history.state) {
			setSelectedPlans(window.history.state.order);
			setAllPlans(data.allContentfulPlanFeature.edges);

			let selectedPlansFilter = selectedPlans.map(plan => {
				return plan.id;
			});
			let filteredPlan = allPlans
				.filter(plan => !selectedPlansFilter.includes(plan.node.id))
				.map(plan => {
					return { title: plan.node.title, excerpt: plan.node.excerpt.excerpt };
				});
			console.log(filteredPlan);

			let result = selectedPlans.filter(x => allPlans.includes(x));
			console.log(result);
		} else {
			console.log('wrong way buddy');
		}
	});

	return (
		<Layout>
			<SEO title="Order" />
			<PageHeader
				header={page.header}
				headerText={page.headerText}
				isHeaderVisible={page.isHeaderVisible}
				isHeaderTextVisible={page.isHeaderTextVisible}
			/>
			<Row className="around">
				<h3>Hello</h3>
			</Row>
		</Layout>
	);
};

export const query = graphql`
	{
		allContentfulPage(filter: { title: { eq: "Order" } }) {
			edges {
				node {
					title
					headerText
					header
					isHeaderTextVisible
					isHeaderVisible
				}
			}
		}
		allContentfulPlanFeature {
			edges {
				node {
					id
					title
					excerpt {
						excerpt
						id
					}
				}
			}
		}
	}
`;

export default OrderPage;
