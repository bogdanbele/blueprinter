import React, {useEffect, useRef, useState} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {graphql} from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import PageHeader from '../components/template-components/PageHeader';
import {interpretContent} from '../utils/helpers/content-interpreter';
import ContentSection from '../components/template-components/ContentSection/ContentSection';
import Row from '../components/base-components/Row';
import TeamMember from '../components/template-components/TeamMember/TeamMember';
import Button from '../components/base-components/Button';
import Flex from '../components/base-components/Flex';
import constants from "../config/constants";

const AboutPage = ({data}) => {
	const customerRef = useRef();
	const howRef = useRef();

	const [pageNumber, setPageNumber] = useState(0);

	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;


	useEffect(() => {
		if (window.history.state) {
			switch (window.history.state.scrollTo) {
				case constants.ABOUT_CUSTOMER_FIRST_SECTION: {
					scrollToComponent(customerRef.current, {offset: 0, duration: 1000, align: 'top'});
					break;
				}
				case constants.ABOUT_HOW_WE_WORK_SECTION: {
					scrollToComponent(howRef.current, {offset: 0, duration: 1000, align: 'top'});
					break;
				}
				default:
					break;
			}
			window.history.replaceState({scrollTo: null}, "About Us", "")
		}
	});

	// elem.__typename
	const aboutSections = pageSections.filter(elem => elem.__typename === 'ContentfulContentSection');

	interpretContent(pageSections);
	const renderContentSection = data => {
		return (
			<>
				<ContentSection
					data={data[0]}
					animateIn={'fadeInUp'}
					ref={section => {
						customerRef.current = section;
					}}/>

				<ContentSection
					data={data[1]}
					animateIn={'fadeInUp'}
					ref={section => {
						howRef.current = section;
					}}
				/>
			</>
		);
	};

	return (
		<Layout>
			<SEO title="About"/>
			<PageHeader data={page}/>
			<ContentSection
				animateIn={'none'}
				isInitiallyVisible={true}
				className={"p-0 w-100 min-h-initial"}
				isHeaderVisible={false}
				data={aboutSections[2]}
			/>
			{renderContentSection(aboutSections)}
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
                            ... on ContentfulTeamMember {
                                id
                                name
                                skills
                                description {
                                    description
                                }
                                image {
                                    id
                                    description
                                    fixed(width: 420, height: 600) {
                                        ...GatsbyContentfulFixed
                                    }
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
