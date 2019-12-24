import React from 'react';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import { navigate } from '@reach/router';
import { graphql } from 'gatsby';
import Row from '../components/base-components/Row';
import constants from '../config/constants';
import ExcerptCard from '../components/template-components/ExcerptCard/';
import handshakeSVG from '../utils/svgs/029-handshake.svg';
import handSVG from '../utils/svgs/025-hand.svg';
import thoughtSVG from '../utils/svgs/005-thought.svg';
import wrapWithParagraph from '../utils/helpers/TextWrapper';
import PageHeader from '../components/template-components/PageHeader';

const IndexPage = ({ data }) => {
	const scrollToFirstRef = () => {
		navigate('/about/', {
			state: {
				scrollTo: constants.ABOUT_CUSTOMER_FIRST_SECTION,
			},
		}).then();
	};

	const scrollToSecondRef = () => {
		navigate('/about/', {
			state: {
				scrollTo: constants.ABOUT_HOW_WE_WORK_SECTION,
			},
		}).then();
	};

	const scrollToThirdRef = () => {
		navigate('/about/', {
			state: {
				scrollTo: constants.ABOUT_WHY_SECTION,
			},
		}).then();
	};

	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;

	const sectionOneFormatedExcerpt = wrapWithParagraph(pageSections[0].excerpt.excerpt);
	const sectionTwoFormatedExcerpt = wrapWithParagraph(pageSections[1].excerpt.excerpt);
	const sectionThreeFormatedExcerpt = wrapWithParagraph(pageSections[2].excerpt.excerpt);

	return (
		<Layout className="alternating-row">
			<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
			<PageHeader
				header={page.header}
				headerText={page.headerText}
				isHeaderVisible={page.isHeaderVisible}
				isHeaderTextVisible={page.isHeaderTextVisible}
			/>

			<Row className="justify-content-around">
				<ExcerptCard
					header={pageSections[0].header}
					icon={handshakeSVG}
					flexClasses="flex--2"
					excerpt={sectionOneFormatedExcerpt}
					buttonOnClick={scrollToFirstRef}
				/>

				<ExcerptCard
					header={pageSections[1].header}
					icon={handSVG}
					flexClasses="flex--2"
					excerpt={sectionTwoFormatedExcerpt}
					buttonOnClick={scrollToSecondRef}
				/>
			</Row>
			<Row>
				<ExcerptCard
					header={pageSections[2].header}
					icon={thoughtSVG}
					flexClasses="flex--1"
					excerpt={sectionThreeFormatedExcerpt}
					buttonOnClick={scrollToThirdRef}
				/>
			</Row>
		</Layout>
	);
};

export const query = graphql`
	{
		allContentfulPage(filter: { title: { eq: "Frontpage" } }) {
			edges {
				node {
					headerText
					header
					createdAt
					isHeaderTextVisible
					isHeaderVisible
					contentSections {
						__typename
						... on Node {
							... on ContentfulContentSection {
								id
								header
								excerpt {
									excerpt
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default IndexPage;
