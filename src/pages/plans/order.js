import React, { useEffect, useState } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../../components/layout-components/layouts/layout';
import SEO from '../../components/base-components/seo';
import PageHeader from '../../components/template-components/PageHeader';
import Row from '../../components/base-components/Row';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const OrderPage = ({ data }) => {
	const orderArray = window.history.state !== null ? window.history.state.order : [];
	const allPlans = data.allContentfulPlanFeature.edges;
	let missingPlans = null;

	const [chosenPlans, setChosenPlans] = useState([]);

	const page = data.allContentfulPage.edges[0].node;

	const handleChange = event => {
		setChosenPlans(event.target.value);
	};

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
			},
		},
	};

	function returnList() {
		return (
			<Select
				labelId="demo-mutiple-checkbox-label"
				id="demo-mutiple-checkbox"
				style={{ color: 'charcoal', backgroundColor : 'aliceblue' }}
                multiple
                labelWidth
                variant={'outlined'}
				value={chosenPlans}
				onChange={handleChange}
				input={<Input className='px-4'/>}
				renderValue={selected => selected.join(', ')}
				MenuProps={MenuProps}
			>
				{console.log(missingPlans)}
				{missingPlans.map(name => {
					console.log(name);
					return (
						<MenuItem key={name.title} value={name.title}>
							<Checkbox checked={chosenPlans.indexOf(name.title) > -1} />
							<ListItemText primary={name.title} />
						</MenuItem>
					);
				})}
			</Select>
		);
	}

	useEffect(() => {
		if (window.history.state) {
			console.log(missingPlans);
		} else {
			console.log('wrong way buddy');
		}
	});

	let selectedPlansFilter = orderArray.map(plan => {
		return plan.id;
	});

	missingPlans = allPlans
		.filter(plan => !selectedPlansFilter.includes(plan.node.id))
		.map(plan => {
			return { title: plan.node.title, excerpt: plan.node.excerpt.excerpt };
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
			{console.log(missingPlans)}
			<Row className="around column">
				<h2>Select some extra features</h2>
				{returnList()}
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
