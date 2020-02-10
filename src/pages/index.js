import React from 'react';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import {navigate} from '@reach/router';
import {graphql} from 'gatsby';
import Row from '../components/base-components/Row';
import constants from '../config/constants';
import ExcerptCard from '../components/template-components/ExcerptCard/';
import handshakeSVG from '../utils/svgs/029-handshake.svg';
import handSVG from '../utils/svgs/025-hand.svg';
import PageHeader from '../components/template-components/PageHeader';
import ScrollAnimation from "react-animate-on-scroll";

const IndexPage = ({data}) => {
	//region Scroll Refs
	const scrollToFirstRef = () => {
		navigate('/about', {
			state: {
				scrollTo: constants.ABOUT_CUSTOMER_FIRST_SECTION,
			},
		}).then();
	};

	const scrollToSecondRef = () => {
		navigate('/about', {
			state: {
				scrollTo: constants.ABOUT_HOW_WE_WORK_SECTION,
			},
		}).then();
	};

	//endregion

	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;

	return (
		<Layout>
			<SEO title="Home" keywords={['gatsby', 'application', 'react']}/>
			<ScrollAnimation
				animateOnce={true}
				className={'d-flex w-100'}
				animateIn={'fadeIn'}
				offset={300}
			>
				<PageHeader
					rowClassName='Row--splash'
					data={page}
				/>
			</ScrollAnimation>
			<Row
				holderClass='w-100-vw'
				className="justify-content-around">
				<ExcerptCard
					data={pageSections[0]}
					flexClasses="flex--2"
					buttonOnClick={scrollToFirstRef}
				/>
				<ExcerptCard
					data={pageSections[1]}
					flexClasses="flex--2"
					buttonOnClick={scrollToSecondRef}
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
