import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Row from "../components/base-components/Row";

const GetStartedPage = () => (
    <Layout>
        <SEO title="Get Started"/>
        <Row className='row--column'>
            <h1>Hi from the get started page</h1>
            <p>Welcome to the get started page</p>
            <Link to="/">Go back to the homepage</Link>
        </Row>
    </Layout>
);

export default GetStartedPage
