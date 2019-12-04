import React from 'react';
import {graphql, Link} from 'gatsby';
import Flex from '../components/base-components/Flex';
import Item from '../components/base-components/Item';
import scrollToComponent from 'react-scroll-to-component';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import constants from '../config/constants';

class AboutPage extends React.PureComponent {

	componentDidMount() {
		if (window.history.state) {
			switch (window.history.state.scrollTo) {
				case constants.ABOUT_CUSTOMER_FIRST_SECTION: {
					break;
				}
				case constants.ABOUT_HOW_WE_WORK_SECTION: {
					scrollToComponent(this.howRef, {offset: 0, duration: 1000, align: 'top'});
					break;
				}
				case constants.ABOUT_WHY_SECTION: {
					scrollToComponent(this.whyRef, {offset: 0, duration: 1000, align: 'top'});
					break;
				}
				default:
					break;
			}
		}
		this.howRef = React.createRef();
		this.customerRef = React.createRef();
		this.whyRef = React.createRef();
	}

	render() {
		return (
			<Layout className='alternating-row'>
				<SEO title="About" />
				<Row
					className="centered Row--header"
					ref={section => {
						this.customerRef = section;
					}}
				>
					<Flex className="column flex--1 flex--h1-center">

							<h1>Customers first</h1>
							<p>
								At ncweb we create value. We seek to create innovation and opportunities. We know
								how important it is to be on the internet, and we can help you get connected to the
								world! We want to you to be available and accessible to the world wide web.
							</p>
							<p>
								At ncweb we create value. We seek to create innovation and opportunities. We know
								how important it is to be on the internet, and we can help you get connected to the
								world! We want to you to be available and accessible to the world wide web.
							</p>
							<p>
								At ncweb we create value. We seek to create innovation and opportunities. We know
								how important it is to be on the internet, and we can help you get connected to the
								world! We want to you to be available and accessible to the world wide web.
							</p>
					</Flex>
				</Row>
				<Row
					className="centered"
					ref={section => {
						this.howRef = section;
					}}
				>
					<Flex className="flex--1">
						<Item>
							<h1>How we work</h1>
							<p>
								With the state-of-the-art technology we manage, administrate and process each and
								every website. With our in-house UX-research, we discover and design the ultimate
								website that generates revenue and popularity. In other words, we help you get
								connected to the world.
							</p>
							<p>
								With the state-of-the-art technology we manage, administrate and process each and
								every website. With our in-house UX-research, we discover and design the ultimate
								website that generates revenue and popularity. In other words, we help you get
								connected to the world.
							</p>
							<p>
								With the state-of-the-art technology we manage, administrate and process each and
								every website. With our in-house UX-research, we discover and design the ultimate
								website that generates revenue and popularity. In other words, we help you get
								connected to the world.
							</p>
						</Item>
					</Flex>
				</Row>
				<Row
					className="centered"
					ref={section => {
						this.whyRef = section;
					}}
				>
					<Flex className="flex--1">
						<Item>
							<h1>Why we do it ?</h1>
							<p>
								The customer is in the heart of ncwebs identity. We create non cliché websites for
								our customers. Unlike other website-builders, we focus on you. We thrive to create a
								memorable website that illustrate you, the way you want it.
							</p>
							<p>
								We create opportunities where there aren’t any. We see things from our customers
								perspective, and we strive to create innovative websites, the way you like it.
							</p>
							<p>
								The customer is in the heart of ncwebs identity. We create non cliché websites for
								our customers. Unlike other website-builders, we focus on you. We thrive to create a
								memorable website that illustrate you, the way you want it.
							</p>
							<p>
								We create opportunities where there aren’t any. We see things from our customers
								perspective, and we strive to create innovative websites, the way you like it.
							</p>
						</Item>
					</Flex>
				</Row>
			</Layout>
		);
	}
}

export default AboutPage;
