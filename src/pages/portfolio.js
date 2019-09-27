import React from "react"
import {graphql, Link} from "gatsby"
import Image from "../components/Images/image";

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import {Row} from "blueprint-components-react";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
<Row>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Image/>
    <Link to="/">Go back to the homepage</Link>
    </Row>
  </Layout>
);



export default SecondPage
