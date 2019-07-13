import React from "react";

import Layout from "../layouts/layout";
import SEO from "../components/seo";
import Flex from "../components/Flex/flex";
import Row from "../components/Row/row";
import Item from "../components/Item/item";
import Icon from "../components/Icon/icon";
import {FaGithub} from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Hi people</h1>
    <p>Welcome to your new Alberto site</p>
    <p>Now go build something great.</p>
    <Icon className="primary round">
  <FaGithub/>
    </Icon>

    <Row className="centered">
      <Flex className="1 shadow">
        <Item>
          <div>
            <h1>This website is my official digital visit card. </h1>
            <p>
            

I’m a 22 years old ambitious and extremely passionate IT and Communication graduate
 with a great interest in UX-Research, Qualitative and Quantitative methods and Human computer interaction. I have a wide range of skills and professional experiences in organizational work and IT.
</p><p> I have 1,5 years of experience in Qualitative research and conducting users-test and experiments. I`m always trying to improve my skills and I’m learning all the time. I find the interaction between humans and technology fascinating, and that’s is my motivation.
            </p>
          </div>
        </Item>
      </Flex>
    </Row>
  </Layout>
);

export default IndexPage;
