import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/Button/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

<div class="container">
<button class="btn yellow">Yellow</button>
    <button class="btn gray">gray</button>
    <button class="btn red">red</button>
    <button class="btn purple">purple</button>
    <button class="btn">default</button>
    <button class="btn red" disabled>red disabled</button>
</div>

    <Button buttonTitle={"Sticker"} />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
