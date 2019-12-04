import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import Flex from "../components/base-components/Flex";

const GetStartedPage = () =>
	<Layout>
		<SEO title="Get Started"/>
		<Row className='Row--header'>
			<Flex className='column flex---1 flex--text-center'>
				<h1>Here's how we do it</h1>
				<h3>Here at ncweb we build websites and apps that help you engage with people across all devices,
					platforms, and experiences.</h3>
			</Flex>
		</Row>
	</Layout>
;

export default GetStartedPage;
