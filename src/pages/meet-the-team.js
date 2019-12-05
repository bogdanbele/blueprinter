import React from 'react';
import {graphql, Link, StaticQuery} from 'gatsby';

import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import Image from '../components/base-components/Image/Image';
import TeamMember from '../components/template-components/TeamMember/TeamMember';
import Flex from "../components/base-components/Flex";
import FluidImage from "../components/base-components/Image/FluidImage";

let staticQuery = <StaticQuery
    query={graphql` {
            allTeamMembersJson {
                edges {
                    node {
                        id
                        name
                        image
                        sections
                        skills
                    }
                }
            }
        }
    `}
    render={data =>
        getTeamMember(data)
    }
/>;

function getTeamMember(data) {
    const linksArray = [];
    // noinspection JSUnresolvedVariable
    data.allTeamMembersJson.edges.forEach((item, index) =>
        linksArray.push(
            <Row
                key={item.node.id}>
                <TeamMember
                    index={index}
                    imgsrc={item.node.image}
                    name={item.node.name}
                    sections={item.node.sections}
                    skills={item.node.skills}
                />
            </Row>
        )
    );
    return linksArray;
}

class MeetTheTeamPage extends React.Component {
    render() {
        return (
            <Layout className='alternating-row'>
                <SEO title="Meet the team"/>
                <Row className="row--column centered Row--header">
                    <Flex className='column flex---1 text-center'>
                        <h1>Here's us!</h1>
                        <h3>We're a bunch of cool people from across the globe</h3>
                    </Flex>
                </Row>
                {staticQuery}
            </Layout>
        );
    }
}

export default MeetTheTeamPage;
