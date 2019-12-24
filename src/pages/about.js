import React, { useEffect, useRef } from 'react';
import Flex from '../components/base-components/Flex';
import Item from '../components/base-components/Item';
import scrollToComponent from 'react-scroll-to-component';
import { graphql } from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import constants from '../config/constants';
import FluidImage from '../components/base-components/Image/FluidImage';
import wrapWithParagraph from '../utils/helpers/TextWrapper';
import PageHeader from '../components/template-components/PageHeader';

const AboutPage = ({ data }) => {
	const customerRef = useRef();
	const howRef = useRef();
	const whyRef = useRef();

	useEffect(() => {
		if (window.history.state) {
			switch (window.history.state.scrollTo) {
				case constants.ABOUT_CUSTOMER_FIRST_SECTION: {
					scrollToComponent(customerRef.current, { offset: 0, duration: 1000, align: 'top' });
					break;
				}
				case constants.ABOUT_HOW_WE_WORK_SECTION: {
					scrollToComponent(howRef.current, { offset: 0, duration: 1000, align: 'top' });
					break;
				}
				case constants.ABOUT_WHY_SECTION: {
					scrollToComponent(whyRef.current, { offset: 0, duration: 1000, align: 'top' });
					break;
				}
				default:
					break;
			}
		}
	});

	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;

	const sectionOneParagraphExcerpt = pageSections[0].content.content ? wrapWithParagraph(pageSections[0].content.content) : '';
	const sectionTwoParagraphExcerpt = pageSections[1].content.content ? wrapWithParagraph(pageSections[1].content.content) : '';
	const sectionThreeParagraphExcerpt = pageSections[2].content.content ? wrapWithParagraph(pageSections[2].content.content) : '';

	return (
		<Layout className="alternating-row">
			<SEO title="About" />

			<PageHeader
				rowClassName={'text-center centered Row--0-pb Row--full-width'}
				header={page.header}
				headerText={page.headerText}
				isHeaderVisible={page.isHeaderVisible}
				isHeaderTextVisible={page.isHeaderTextVisible}
			>
				<FluidImage className="Image--transparent" imgsrc="us-small-2.jpg" />
			</PageHeader>

			<Row
				className="centered Row--header"
				ref={section => {
					customerRef.current = section;
				}}
			>
				<Flex className="flex--1">
					<Item>
						<h1>{pageSections[0].header}</h1>
						{sectionOneParagraphExcerpt}
					</Item>
				</Flex>
			</Row>

			<Row
				className="centered"
				ref={section => {
					howRef.current = section;
				}}
			>
				<Flex className="flex--1">
					<Item>
						<h1>{pageSections[1].header}</h1>
						{sectionTwoParagraphExcerpt}
					</Item>
				</Flex>
			</Row>

			<Row
				className="centered"
				ref={section => {
					whyRef.current = section;
				}}
			>
				<Flex className="flex--1">
					<Item>
						<h1>{pageSections[2].header}</h1>
						{sectionThreeParagraphExcerpt}
					</Item>
				</Flex>
			</Row>
		</Layout>
	);
};

export const query = graphql`
	{
		allContentfulPage(filter: { title: { eq: "About" } }) {
			edges {
				node {
					headerText
					header
					isHeaderTextVisible
					isHeaderVisible
					contentSections {
						__typename
						... on Node {
							... on ContentfulContentSection {
								header
								content {
									content
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default AboutPage;
