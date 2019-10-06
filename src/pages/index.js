import React from "react";

import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {navigate} from "@reach/router";
import Row from "../components/base-components/Row";
import Flex from "../components/base-components/Flex";
import Item from "../components/base-components/Item";
import Button from "../components/base-components/Button";


const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <Row>
            <Flex className='column'>
                <h1>Working hard</h1>
                <p>
                    The ncweb team is working hard to bring you our official website online.
                </p>
                <p>
                    If you would like to stay up to date with the current development process
                    we highly recommend heading to the contact page.
                </p>
            </Flex>
        </Row>
        <Row className='around'>
            <Flex className='flex--2 flex--fit'>
                <Item>
                    <h2> Pick up where you've left</h2>
                    <p> Good to have you back ! Log in and pick up where you've left off and start building your website
                        again. </p>
                    <Button onClick={
                        () => navigate("/contact/")
                    }>Contact</Button>
                </Item>
            </Flex>
            <Flex className='flex--2 flex--fit'>
                <Item>
                    <h2> Sign up with Blueprint </h2>
                    <p> Create an account for the ultra fast website builder and bundler. Transpiling, compiling and
                        writing content has never been easier. </p>
                    <Button onClick={
                        () => navigate("/contact/")
                    }>Contact</Button>
                </Item>
            </Flex>
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
