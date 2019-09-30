import React from "react";

import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {FaGithub} from "react-icons/fa"
import {Flex, Button, Icon, Row, Item} from "blueprint-components-react";
import {navigate} from "@reach/router";


const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <Row>
            <h1>Working hard</h1>
            <p>
                The ncweb team is working hard to bring you our official website online.
            </p>
            <p>
                If you would like to stay up to date with the current development process
                we highly recommend heading to the contact page.
            </p>
            <Button onClick={
                () => navigate("/contact/")
            }>Contact</Button>
        </Row>
        <Row className="centered full">
            <Flex className="flex--2 shadow">
                <Item>
                    <div>
                        <h2>This website is my official digital visit card. </h2>
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
