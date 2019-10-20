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
            <Flex className='column flex---1 flex--text-center'>
            <h1>Websites for humans</h1>
            <h3>Here at ncweb we build websites and apps that help you engage with people across all devices, platforms, and experiences.</h3>
            </Flex>
            </Row>
        <Row>
            <Flex className='column flex---1'>
                <h1>Why we do it ?</h1>
                <p>The customer is in the heart of ncwebs identity. We create non cliché websites for our customers.
                    Unlike other website-builders, we focus on you. We thrive to create a memorable website that
                    illustrate you, the way you want it.
                </p>
                <p>We create opportunities where there aren’t any. We see things from our customers perspective, and we
                    strive to create innovative websites, the way you like it.</p>
            </Flex>
        </Row>
        <Row className='around'>
            <Flex className='flex--2'>
                <Item>
                    <h2>Customers first</h2>
                    <p>
                        At ncweb we create value. We seek to create innovation and opportunities. We know how important
                        it is to be on the internet, and we can help you get connected to the world! We want to you to
                        be available and accessible to the world wide web.
                    </p>
                    <Button onClick={
                        () => navigate("/contact/")
                    }>Contact</Button>
                </Item>
            </Flex>
            <Flex className='flex--2'>
                <Item>
                    <h2>How we work </h2>
                    <p>With the state-of-the-art technology we manage, administrate and process each and every website.
                        With our in-house UX-research, we discover and design the ultimate website that generates
                        revenue and popularity. In other words, we help you get connected to the world. </p>
                    <Button onClick={
                        () => navigate("/contact/")
                    }>Contact</Button>
                </Item>
            </Flex>
        </Row>
    </Layout>
);

export default IndexPage;
