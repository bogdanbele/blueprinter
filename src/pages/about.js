import React, {useEffect, useRef, useState} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {graphql} from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import PageHeader from '../components/template-components/PageHeader';
import {interpretContent} from '../utils/helpers/content-interpreter';
import ContentSection from '../components/template-components/ContentSection/ContentSection';
import constants from "../config/constants";

const AboutPage = ({data}) => {
	const customerRef = useRef();
	const howRef = useRef();

	const [pageNumber, setPageNumber] = useState(0);

	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;


	useEffect(() => {
		if(window.history.state === null){
			return
		}
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
	}, [window.history.state]);

	// elem.__typename
	const aboutSections = pageSections.filter(elem => elem.__typename === 'ContentfulContentSection');

	interpretContent(pageSections);
	const renderContentSection = data => {
		return (
			<>
				<ContentSection
					data={data[0]}
					animateIn={'fadeInUp'}
					isInitiallyVisible={false}
					ref={section => {
						customerRef.current = section;
					}}/>

				<ContentSection
					data={data[1]}
					animateIn={'fadeInUp'}
					isInitiallyVisible={false}
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
