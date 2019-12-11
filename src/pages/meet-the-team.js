import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import TeamMember from '../components/template-components/TeamMember/TeamMember';
import Flex from '../components/base-components/Flex';

export const query=graphql` {
        allContentfulTeamMember(sort:{
            fields:order,
            order:ASC
        }) {
            edges {
                node {
                    id
                    order
                    name
                    skills
                    description {
                        description
                    }
                    image {
                        id
                        description
                        fixed(width:420,height:600){
                            ...GatsbyContentfulFixed 
                        } 
                    }
                }
            }
        }
    }
`;

function getTeamMember(data) {
    console.log(data)
	const linksArray = [];
	// noinspection JSUnresolvedVariable
	data.allContentfulTeamMember.edges.forEach((item, index) =>
		linksArray.push(
			<Row key={item.node.id}>
				<TeamMember
					index={index}
                    imgsrc={item.node.image.fixed}
                    imgalt={item.node.image.description}
					name={item.node.name}
					description={item.node.description.description}
					skills={item.node.skills}
				/>
			</Row>
		)
	);
	return linksArray;
}

const MeetTheTeamPage =({data}) => (
			<Layout className="alternating-row">
				<SEO title="Meet the team" />
				<Row className="row--column centered Row--header">
					<Flex className="column flex---1 text-center">
						<h1>Here's us!</h1>
						<h3>We're a bunch of cool people from across the globe</h3>
					</Flex>
				</Row>
                {getTeamMember(data)}
        </Layout>
);
export default MeetTheTeamPage;
