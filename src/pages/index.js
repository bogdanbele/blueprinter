import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/Button/button"
import getSocialMediaType from "../scripts/social-media-type.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something {getSocialMediaType("https://twitter.com/realDonaldTrump")}great.</p>
    

<div className="container">
<button className="btn yellow">Yellow</button>
    <button className="btn gray">gray</button>
    <button className="btn red">red</button>
    <button className="btn purple">purple</button>
    <button className="btn">default</button>
    <button className="btn red" disabled>red disabled test</button>
</div>

    <Button buttonTitle={"Sticker"} />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
