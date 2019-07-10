import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Button from "../components/Button/button";
import Flex from "../components/Flex/flex";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Flex className="1 shadow column">
      <h1>Hi people</h1>
      <p>Welcome to your new Alberto site</p>
      <p>Now go build something great.</p>

      <div className="container">
        <Button className="primary wide" buttonTitle="Contact">
          primary
        </Button>
      </div>
    </Flex>

    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`
      }}
    >
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
