import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Button from "../components/Button/button";
import Flex from "../components/Flex/flex";
import Row from "../components/Row/row";
import Item from "../components/Item/item";
import { FaHeadphones, FaMicrophone, FaCodeBranch } from "react-icons/fa";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Hi people</h1>
    <p>Welcome to your new Alberto site</p>
    <p>Now go build something great.</p>

    <Row>
      <Flex className="3 shadow">
        <Item>
          <FaHeadphones />
          <div>
            <h1>Works out of the box</h1>
            <p>
              Lightning fast building and running time with the help of the
              latest technology and libraries
            </p>
          </div>
        </Item>
      </Flex>
      <Flex className="3 shadow">
        <Item>
          <FaMicrophone />
          <div>
            <h1>Built by musicians</h1>
            <p>
              We understand your needs, we know how to tailor our website to
              your needs.
            </p>
          </div>
        </Item>
      </Flex>
      <Flex className="3 shadow">
        <Item>
          <FaCodeBranch />
          <div>
            <h1>Continous Deployment</h1>
            <p>
              Push to master, wait for Netlify to build, and poof ! Your website
              is now live.
            </p>
          </div>
        </Item>
      </Flex>
    </Row>
    <Row>
      <div className="container">
        <Button className="primary wide" buttonTitle="Contact">
          primary
        </Button>
      </div>
    </Row>
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
