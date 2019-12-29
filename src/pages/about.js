import React, {useEffect, useRef, useState} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {graphql} from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import constants from '../config/constants';
import PageHeader from '../components/template-components/PageHeader';
import {interpretContent} from '../utils/helpers/content-interpreter';
import ContentSection from '../components/template-components/ContentSection/ContentSection';
import Row from '../components/base-components/Row';
import TeamMember from '../components/template-components/TeamMember/TeamMember';
import Button from '../components/base-components/Button';
import Item from '../components/base-components/Item';
import Flex from "../components/base-components/Flex";

const AboutPage = ({data}) => {

	const getTeamMember = teamMembers => {
		const linksArray = [];
		// noinspection JSUnresolvedVariable
		teamMembers.forEach((item, index) => {
			linksArray.push(
				<Row key={item.id} holderClass="w-100-vw">
					<TeamMember data={item} index={index}/>
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

	const activeClass = bool =>
		(bool) ? 'Button__active' : ''
	;

	const renderAboutSubPage = data => {
		return (
			<Row>
				<ContentSection
					data={data[0]}
				/>

				<ContentSection
					data={data[1]}
				/>

				<ContentSection
					data={data[2]}
				/>
			</Row>
		)
	};

	return (
		<Layout className="alternating-row">
			<SEO title="About"/>

			<PageHeader
				data={page}
				rowClassName={'text-center justify-content-center pb-0 px-0 w-100 flex-column pt-0 '}
			>
				<Flex className='flex-row justify-content-around my-0'>
					<Button
						className={'Button--no-border d-flex mt-0 ' + activeClass((pageNumber === 0))}
						onClick={() =>
							setPageNumber(0)
						}
					>
						Our Values
					</Button>
					<Button
						className={'Button--no-border d-flex mt-0 ' + activeClass((pageNumber === 1))}
						onClick={() =>
							setPageNumber(1)
						}
					>
						Meet the team
					</Button>
				</Flex>
			</PageHeader>

			{(pageNumber === 0)? renderAboutSubPage(pageSections) :<Row>{getTeamMember(teamMembers)}</Row>}

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
