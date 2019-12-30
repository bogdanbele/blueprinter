import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
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
import ScrollAnimation from "react-animate-on-scroll";

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
			window.history.replaceState({scrollTo : null}, "About Us", "")
		}
	});

	const getTeamMember = teamMembers => {
		const linksArray = [];
		// noinspection JSUnresolvedVariable
		teamMembers.forEach((item, index) => {
			linksArray.push(
				<Row className={'alternating-row'} key={item.id} holderClass="w-100-vw">
					<ScrollAnimation
						className={'d-flex w-100'}
						animateIn="fade-enter-active"
						offset={250}
						key={item.id}
					>
					<TeamMember data={item} index={index}/>
					</ScrollAnimation>
				</Row>
			);
		});
		return linksArray;
	};

	const [pageNumber, setPageNumber] = useState(0);

	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;

	// elem.__typename

	const teamMembers = pageSections.filter(elem => elem.__typename === 'ContentfulTeamMember');

	interpretContent(pageSections);

	const contentBasedOnState = () => {
		if (pageNumber === 0) {
			return renderAboutSubPage(pageSections)
		} else if (pageNumber === 1) {
			return getTeamMember(teamMembers)
		}
	};

	const activeClass = bool => (bool ? 'Button__active' : '');
	const renderAboutSubPage = data => {
		return (
			<>
				<ContentSection
					data={data[0]}
					ref={section => {
						customerRef.current = section;
					}}/>

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
			</>
		);
	};

	return (
		<Layout>
			<SEO title="About"/>
			<PageHeader data={page} rowClassName={'pb-0'}/>
			<PageHeader rowClassName={'text-center justify-content-center p-0 w-100 flex-column'}>
				<Flex className="flex-row justify-content-around my-0">
					<Button
						className={'Button--no-border d-flex mt-0 ' + activeClass(pageNumber === 0)}
						onClick={() => setPageNumber(0)}
					>
						Our Values
					</Button>
					<Button
						className={'Button--no-border d-flex mt-0 ' + activeClass(pageNumber === 1)}
						onClick={() => setPageNumber(1)}
					>
						Meet the team
					</Button>
				</Flex>
			</PageHeader>
			<TransitionGroup>
				<CSSTransition key={pageNumber} timeout={750} classNames="fade">
					<Row>{contentBasedOnState()}</Row>
				</CSSTransition>
			</TransitionGroup>
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
