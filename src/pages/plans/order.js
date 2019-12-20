import React, {useEffect} from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../../components/layout-components/layouts/layout';
import SEO from '../../components/base-components/seo';
import PageHeader from '../../components/template-components/PageHeader';
import Row from '../../components/base-components/Row';

const OrderPage = ({ data }) => {
    const page = data.allContentfulPage.edges[0].node;

    useEffect(() => {
		if (window.history.state) {
			console.log(window.history.state.order)
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
            <h3>Hello</h3></Row>
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
	}
`;

export default OrderPage;
