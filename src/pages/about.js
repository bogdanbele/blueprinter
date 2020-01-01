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
	const whyRef = useRef();

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
				case constants.ABOUT_WHY_SECTION: {
					scrollToComponent(whyRef.current, {offset: 0, duration: 1000, align: 'top'});
					break;
				}
				default:
					break;
			}
			window.history.replaceState({scrollTo: null}, "About Us", "")
		}
	});

	const getTeamMember = teamMembers => {
		const linksArray = [];
		// noinspection JSUnresolvedVariable
		teamMembers.forEach((item, index) => {
			linksArray.push(
				<Row className={'alternating-row'} key={item.id} holderClass="w-100-vw">
					<TeamMember data={item} index={index}/>
				</Row>
			);
		});
		return linksArray;
	};

	// elem.__typename

	const teamMembers = pageSections.filter(elem => elem.__typename === 'ContentfulTeamMember');
	const aboutSections = pageSections.filter(elem => elem.__typename === 'ContentfulContentSection');

	interpretContent(pageSections);

	const contentBasedOnState = () => {
		if (pageNumber === 0) {
			return renderContentSection(aboutSections)
		} else if (pageNumber === 1) {
			return getTeamMember(teamMembers)
		}
	};

	const activeClass = bool => (bool ? 'Button__active' : '');
	const renderContentSection = data => {
		return (
			<>
				<ContentSection
					data={data[0]}
					ref={section => {
						customerRef.current = section;
					}}/>

				<ContentSection
					data={data[1]}
					ref={section => {
						howRef.current = section;
					}}
				/>

				<ContentSection
					data={data[2]}
					ref={section => {
						whyRef.current = section;
					}}
				/>
			</>
		);
	};

	return (
		<Layout>
			<SEO title="About"/>
			<PageHeader data={page}>
				<Row className={'text-center justify-content-center p-0 w-100 flex-column'}>
					<Flex className="flex-row justify-content-around p-0 my-0">
						<Button
							className={'Button--no-border d-flex mt-0 ' + activeClass(pageNumber === 0)}
							onClick={() => setPageNumber(0)}
						>
							<h3 className='pb-0 mb-1'>Our Values</h3>
						</Button>
						<Button
							className={'Button--no-border d-flex mt-0 ' + activeClass(pageNumber === 1)}
							onClick={() => setPageNumber(1)}
						>
							<h3 className='pb-0 mb-1'>Meet the team</h3>
						</Button>
					</Flex>
				</Row>
			</PageHeader>
			<Row className={'p-0'}>{contentBasedOnState()}</Row>
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
