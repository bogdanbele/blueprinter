import React from "react"
import {graphql, Link} from "gatsby"
import Image from "../components/Images/image";

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import Row from "../components/base-components/Row";

const SecondPage = () => (
    <Layout>
        <SEO title="Page two"/>
        <Row className='row--column'>
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Image/>
            <Link to="/">Go back to the homepage</Link>
        </Row>
    </Layout>
);


export default SecondPage
