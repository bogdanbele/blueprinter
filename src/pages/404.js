import React from 'react';
import {Link} from "gatsby"
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import PageHeader from "../components/template-components/PageHeader";
import Row from "../components/base-components/Row";
import Flex from "../components/base-components/Flex";

const NotFoundPage = () =>
    <Layout>
        <SEO title="404: Not found"/>
        <PageHeader/>
        <Row>
            <Flex className='flex-column'>
                <h1>PAGE NOT FOUND</h1>
                <p>You just hit a route that doesn't exist...</p>
				<p>If you're searching for something that you can't find, we're just a click away</p>
				<Link to="/contact">Contact Support</Link>

			</Flex>
        </Row>
    </Layout>;


export default NotFoundPage;
