import React, {useEffect, useRef} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {graphql} from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import constants from '../config/constants';
import PageHeader from '../components/template-components/PageHeader';
import {interpretContent} from '../utils/helpers/content-interpreter';
import ContentSection from '../components/template-components/ContentSection/ContentSection';

const AboutPage = ({data}) => {
	const customerRef = useRef();
	const howRef = useRef();
	const whyRef = useRef();


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
				case constants.ABOUT_WHY_SECTION: {
					scrollToComponent(whyRef.current, {offset: 0, duration: 1000, align: 'top'});
					break;
				}
				default:
					break;
			}
		}
	});

	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;

	interpretContent(pageSections);
	return (
		<Layout className="alternating-row">
			<SEO title="About"/>

			<PageHeader
				data={page}
				rowClassName={'text-center justify-content-center pb-0 px-0 w-100'}
			/>

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
