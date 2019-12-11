import React from 'react';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import { navigate } from '@reach/router';
import handshakeSVG from '../utils/svgs/029-handshake.svg';
import handSVG from '../utils/svgs/025-hand.svg';
import thoughtSVG from '../utils/svgs/005-thought.svg';
import Row from '../components/base-components/Row';
import Flex from '../components/base-components/Flex';
import Item from '../components/base-components/Item';
import Button from '../components/base-components/Button';
import constants from '../config/constants';
import Icon from '../components/base-components/Icon';
import ExcerptCard from '../components/template-components/ExcerptCard/ExcerptCard';

const IndexPage = () => (
	<Layout className="alternating-row">
		<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
		<Row className="Row--header px-5">
			<Flex className="column flex--text-center">
				<h1>non cliché websites</h1>
				<h3>
					We build individually tailored websites and apps that help you engage with people across
					all devices, and platforms.
				</h3>
			</Flex>
		</Row>
		<Row className="around px-5">
			<ExcerptCard
				header="Customers first"
				iconString="handshake"
				flexClasses="flex--2"
				isButtonEnabled={true}
				excerpt={
					<p>
						We can help you get connected to all corners of the world! We want you to be available
						and accessible to the world wide web.
					</p>
				}
				buttonOnClick={() => {
					navigate('/about/', {
						state: {
							scrollTo: constants.ABOUT_CUSTOMER_FIRST_SECTION,
						},
					}).then();
				}}
			/>
			<ExcerptCard
				header="How we work"
				iconString="hand"
				flexClasses="flex--2"
				isButtonEnabled={true}
				excerpt={
					<p>
						With state-of-the-art technology, in-house UX-research, we discover and design the
						ultimate website that brings you traffic and revenue.
					</p>
				}
				buttonOnClick={() =>
                    navigate('/about/', {
                        state: {
                            scrollTo: constants.ABOUT_HOW_WE_WORK_SECTION,
                        },
                    })
                }
			/>
		</Row>
		<Row className="px-5">
        <ExcerptCard
				header="Why we do it?"
				iconString="thought"
				flexClasses="flex--1"
				isButtonEnabled={true}
				excerpt={
                    <span>
                        <p>
                            We create non cliché websites for our customers. Unlike other website-builders, we focus
                            on you. We thrive to create an innovative website in alignment with your needs.
                        </p>
                        <p>We see things from our customers perspective, combining functionality and design.</p>
                    </span>
                }
                buttonOnClick={() =>
                    navigate('/about/', {
                        state: {
                            scrollTo: constants.ABOUT_WHY_SECTION,
                        },
                    })
                }
			/>
		</Row>
	</Layout>
);
export default IndexPage;
