import React from "react"
import { Link } from "gatsby"
import Image from "../components/image";

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

 <div id="ll-schedule-embed" data-schedule-id="591237"></div>
<script type="text/javascript" src="https://scheduler.leaguelobster.com/static/embed_en.js"></script>

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`
      }}
    >
    <Image />
     
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
