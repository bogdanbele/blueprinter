import React from "react";

import Layout from "../layouts/layout";
import SEO from "../components/seo";
import Row from "../components/Row/row";
import Item from "../components/Item/item";
import Icon from "../components/Icon/icon";
import {FaGithub} from "react-icons/fa"
import {Flex, Button} from "blueprint-components-react";


const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <Row>
            <h1>Hello people</h1>
            <p>Welcome to our new headquarters. This website is currently under construction
                with no clear date of release. If you would like to stay up to date with the
                current development process we highly suggest heading to the contact page.
            </p>
            <Icon className="primary round">
                <FaGithub/>
            </Icon>
            <Button onClick={
                () => console.log('bean')
            }>Click</Button>
        </Row>
        <Row className="centered full">
            <Flex className="flex--2 shadow">
                <Item>
                    <div>
                        <h1>This website is my official digital visit card. </h1>
                        <p>
                            I’m a 28 years old ambitious and extremely passionate IT and Communication graduate
                            with a great interest in UX-Research, Qualitative and Quantitative methods and Human
                            computer interaction. I have a wide range of skills and professional experiences in
                            organizational work and IT.
                        </p><p> I have 1,5 years of experience in Qualitative research and conducting users-test and
                        experiments. I`m always trying to improve my skills and I’m learning all the time. I find the
                        interaction between humans and technology fascinating, and that’s is my motivation.
                    </p>
                    </div>
                </Item>
            </Flex>
        </Row>
    </Layout>
);

export default IndexPage;
