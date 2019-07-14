import React from "react";
import { Link } from "gatsby";
import Image from "../components/image";

import Layout from "../layouts/layout";
import SEO from "../components/seo";
import Row from "../components/Row/row";
import Item from "../components/Item/item";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Row>


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
    </Row>
  </Layout>
);

export default SecondPage;
