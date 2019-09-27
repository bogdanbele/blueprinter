import React from "react";
import Image from "../components/Images/image";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {Row} from "blueprint-components-react";

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
