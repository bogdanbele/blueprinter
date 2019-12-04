import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import Flex from "../components/base-components/Flex";

const GetStartedPage = () =>
    <Layout className='alternating-row'>
        <SEO title="Get Started"/>
        <Row className='Row--header'>
            <Flex className='column flex--text-center'>
                <h1>Our Process: How We Work</h1>
                <h3>NCWeb’s web development process has a flexible phased workflow that allows us to focus on what
                    you're looking for and deliver you what you need, on time and on budget.
                    .</h3>
            </Flex>
        </Row>
        <Row className='column'>
            <Flex className='column flex--text-center'>
                <h1>Phase One</h1>
            </Flex>
            <Flex className='column'>
                <h2>Discovery</h2>
                <h3>Discovery allows us to reach a common understanding between us and our clients.
                </h3>
                <p>
                    You may think you know what problems your site has, but there’s more than one solution out there.
                    The discovery workshop allows us to establish trust, develop empathy, talk about project goals, and
                    begin to see what a relationship between us would be like. By focusing on the goals, we’ll find the
                    best solutions. We will then spend some time understanding your site and its pain points, and agree
                    upon what problems we will solve. Discovery usually involves an in-person (if you are in Greater
                    Copenhagen area) or a videocall workshop with follow-on discussions and results in a document
                    summarizing our understanding of your needs.
                </p>
                <p>
                    At the end of this step you and us will share this document where we, together, agreed on the
                    sticking points to be solved for you.
                </p>
            </Flex>
        </Row>
        <Row className='column'>
            <Flex className='column'>
                <h2>Definition</h2>
                <h3>How are we going to achieve success?</h3>
                <p>Every solution has its own pros and cons, and the decisions you make now will impact everything we do
                    in the future. With usability testing, site maps, content taxonomies, and user journeys, we will
                    learn how to get you what you want in the concrete, rather than thinking about best possible worlds
                    in the abstract.</p>
                <p>We’ll have a list with the features viable to be built. With this document we’ll set up the scope of
                    the project, so that you can have a clear expectation of the product you’ll receive.</p>
            </Flex>
        </Row>
        <Row className='column'>
            <Flex className='column'>
                <h2>Design & Architecture</h2>
                <h3>What will it look like? What will it do?</h3>
                <p>Your solutions live on the web, so design and architecture have to start there. With user experience
                    stories, functionality and content audits, and migration assessment, we decide how to create your
                    project. We practice “component thinking” and design in the browser to create your site in reusable
                    chunks, allowing greater flexibility and a more unified design all around.
                </p>
                <p>
                    We’ll get a file with all the ‘mockups’ (look and feel of each part of your new website) approved by
                    you.
                </p>
            </Flex>
        </Row>
        <Row className='column'>
            <Flex className='column flex--text-center'>
                <h1>Phase Two</h1>
            </Flex>
            <Flex className='column'>
                <h2>Build</h2>
                <h3>Going from ideas to implementation.</h3>
                <p>We work in a modified Agile/Scrum methodology, building in two week sprints to create each section of
                    your project. We roll out these chunks onto a test site, allowing you to see the project at every
                    step as it develops. The build phase ends with a “feature complete” site, giving you time to put
                    finishing touches on your content before…</p>
                <p>We’ll have constant communication, to be sure that we are covering every detail previously set.</p>
            </Flex>
        </Row>
        <Row className='column'>
            <Flex className='column'>
                <h2>Pre-Launch Revision</h2>
                <h3>review the website modules together.</h3>
                <p>Before we get the official launch of your site, we’ll show you a finished version of it through a
                    test site. At this point you can review the final touches and send us, if needed, more content that
                    you would like to add for the site.
                </p>
            </Flex>
        </Row>
        <Row className='column'>
            <Flex className='column'>
                <h2>Launch!</h2>
                <h3>The site goes live!</h3>
                <p>You’ve got a brand new website, it’s time to show it off to the world!
                </p>
            </Flex>
        </Row>
        <Row className='column'>
            <Flex className='column'>
                <h2>Support</h2>
                <h3>We're still going to be here for you.</h3>
                <p>After launch, we transition you to our expert support team so that you get the attention you need
                    when issues arise, and deliver minor enhancements and updates as needed.
                </p>
            </Flex>
        </Row>
    </Layout>
;

export default GetStartedPage;
