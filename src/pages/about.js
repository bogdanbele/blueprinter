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
import {interpretContent} from "../utils/helpers/content-interpreter";
import ContentSection from "../components/template-components/ContentSection/ContentSection";

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

	interpretContent(pageSections);
	return (
		<Layout className="alternating-row">
			<SEO title="About" />

			<PageHeader
				rowClassName={'text-center justify-content-center pb-0 px-0 w-100'}
				header={page.header}
				headerText={page.headerText}
				isHeaderVisible={page.isHeaderVisible}
				isHeaderTextVisible={page.isHeaderTextVisible}
			>
			</PageHeader>

			<ContentSection
				data={pageSections[0]}
				ref={section => {
					customerRef.current = section;
				}}
			/>

			<ContentSection
				data={pageSections[1]}
				ref={section => {
					howRef.current = section;
				}}
			/>

			<ContentSection
				data={pageSections[2]}
				ref={section => {
					whyRef.current = section;
				}}
			/>
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
