import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import TeamMember from '../components/template-components/TeamMember/TeamMember';
import PageHeader from '../components/template-components/PageHeader';

const getTeamMember = (data) => {
	const linksArray = [];
	// noinspection JSUnresolvedVariable
	data.allContentfulPage.edges[0].node.contentSections.forEach((item, index) =>
		linksArray.push(
			<Row key={item.id} holderClass='w-100-vw'>
				<TeamMember
					data={item}
					index={index}
				/>
			</Row>
		)
	);
	return linksArray;
};

const MeetTheTeamPage = ({ data }) => {
    const page = data.allContentfulPage.edges[0].node;

	return (
		<Layout className="alternating-row">
			<SEO title="Meet the team" />
            <PageHeader
				header={page.header}
				headerText={page.headerText}
				isHeaderVisible={page.isHeaderVisible}
				isHeaderTextVisible={page.isHeaderTextVisible}
			/>
			{getTeamMember(data)}
		</Layout>
	);
};

export const query = graphql`
	{
		allContentfulPage(filter: { title: { eq: "Team" } }) {
			edges {
				node {
					title
					headerText
					header
					isHeaderTextVisible
					isHeaderVisible
					contentSections {
						__typename
						... on Node {
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


export default MeetTheTeamPage;
