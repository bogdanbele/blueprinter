import React, { useEffect, useState } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../../components/layout-components/layouts/layout';
import SEO from '../../components/base-components/seo';
import PageHeader from '../../components/template-components/PageHeader';
import Row from '../../components/base-components/Row';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const OrderPage = ({ data }) => {
	const orderArray = window.history.state !== null ? window.history.state.order : [];
	const allPlans = data.allContentfulPlanFeature.edges;
	const [missingPlans, setMissingPlans] = useState([]);

	const page = data.allContentfulPage.edges[0].node;

	useEffect(() => {
		if (window.history.state) {
			let selectedPlansFilter = orderArray.map(plan => {
				return plan.id;
			});

			let filteredPlan = allPlans
				.filter(plan => !selectedPlansFilter.includes(plan.node.id))
				.map(plan => {
					return { title: plan.node.title, excerpt: plan.node.excerpt.excerpt };
				});
			missingPlans.length === 0 ? setMissingPlans(filteredPlan) : null;
			console.log(missingPlans);
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
				<h1>test</h1>
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
