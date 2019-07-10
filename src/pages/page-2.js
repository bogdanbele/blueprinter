import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

 <div id="ll-schedule-embed" data-schedule-id="591237"></div>
<script type="text/javascript" src="https://scheduler.leaguelobster.com/static/embed_en.js"></script>

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
