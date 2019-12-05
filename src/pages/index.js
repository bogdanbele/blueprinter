import React from 'react';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import {navigate} from '@reach/router';
import handshakeSVG from '../utils/svgs/029-handshake.svg';
import handSVG from '../utils/svgs/025-hand.svg';
import thoughtSVG from '../utils/svgs/005-thought.svg';

import Row from '../components/base-components/Row';
import Flex from '../components/base-components/Flex';
import Item from '../components/base-components/Item';
import Button from '../components/base-components/Button';
import constants from '../config/constants';
import Icon from "../components/base-components/Icon";


const IndexPage = () =>
    <Layout className='alternating-row'>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']}/>
        <Row className='Row--header'>
            <Flex className='column flex--text-center'>
                <h1>Calin Bogdan</h1>
                <h3>Here at ncweb we build websites and apps that help you engage with people across all devices,
                    platforms, and experiences.</h3>
            </Flex>
        </Row>
        <Row className='around'>
            <Flex className='flex--2'>
                <Item>
                    <Flex className='centered'>
                        <Icon>
                            <img alt='handshake icon' src={handshakeSVG}/>
                        </Icon>
                    </Flex>
                    <h2>Customers first</h2>
                    <p>
                        We can help you get connected to all corners of the world ! We want to you to
                        be available and accessible to the world wide web.
                    </p>
                    <Button onClick={
                        () => {
                            navigate('/about/', {
                                state: {
                                    'scrollTo': constants.ABOUT_CUSTOMER_FIRST_SECTION,
                                },
                            }).then()
                        }
                    }>Read more</Button>
                </Item>
            </Flex>
            <Flex className='flex--2'>
                <Item>
                    <Flex className='centered'>
                        <Icon>
                            <img alt='hand icon' src={handSVG}/>
                        </Icon>
                    </Flex>
                    <h2>How we work </h2>
                    <p>With state-of-the-art technology, in-house UX-research, we discover and design the ultimate
                        website that brings you
                        revenue and popularity. </p>
                    <Button onClick={
                        () => navigate('/about/', {
                            state: {
                                'scrollTo': constants.ABOUT_HOW_WE_WORK_SECTION,
                            },
                        })
                    }>Read more</Button>
                </Item>
            </Flex>
        </Row>
        <Row>
            <Flex className='flex--1'>
                <Item>
                    <Flex className='centered'>
                        <Icon>
                            <img alt='thought icon' src={thoughtSVG}/>
                        </Icon>
                    </Flex>
                    <h2>Why we do it ?</h2>
                    <p> We create non cliché websites for our customers.
                        Unlike other website-builders, we focus on you. We thrive to create a memorable website that
                        illustrate you, the way you want it.
                    </p>
                    <p>We create opportunities where there aren’t any. We see things from our customers perspective, and
                        we
                        strive to create innovative websites, the way you like it.</p>
                    <Button onClick={
                        () => navigate('/about/', {
                            state: {
                                'scrollTo': constants.ABOUT_WHY_SECTION,
                            },
                        })
                    }>Read more</Button>
                </Item>
            </Flex>
        </Row>
    </Layout>
;

export default IndexPage;
