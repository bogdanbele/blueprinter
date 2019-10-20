import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Row from "../components/base-components/Row";

const AboutPage = () => (
    <Layout>
        <SEO title="Process"/>
        <Row className='row--column'>
            <h1>Hi from the about page</h1>
            <p>Welcome to the about page</p>
            <Link to="/">Go back to the homepage</Link>
        </Row>
    </Layout>
);


export default AboutPage
