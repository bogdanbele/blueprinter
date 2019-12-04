import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import Flex from "../components/base-components/Flex";

const GetStartedPage = () =>
	<Layout className='alternating-row'>
		<SEO title="Get Started"/>
		<Row className='Row--header'>
			<Flex className='column flex--text-center'>
				<h1>Our Process: How We Work</h1>
				<h3>NCWeb’s web development process has a flexible phased workflow that allows us to focus on what you're looking for and deliver you what you need, on time and on budget.
					.</h3>
			</Flex>
		</Row>
		<Row>
			<Flex className='column flex--text-center'>
				<h1>Phase One</h1>
			</Flex>

		</Row>
	</Layout>
;

export default GetStartedPage;
