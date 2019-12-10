import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import Flex from "../components/base-components/Flex";
import ProcessSection from "../components/template-components/ProcessSection/ProcessSection";


export const query=graphql` {
        allContentfulProcessStep(sort:{
            fields:order,
            order:ASC
        }) {
            edges {
                node {
                    id
                    order
                    bigHeader
                    header
                    subHeader
                    content {
                        content
                    }
                }
            }
        }
    }
`;

function getProcessSections(data){
    const sectionsArray = [];
    data.allContentfulProcessStep.edges.forEach((item, index) =>
        sectionsArray.push(
            <ProcessSection
                key={item.node.id}
                content={item.node.content.content}
                bigHeader={item.node.bigHeader}
                header={item.node.header}
                subHeader={item.node.subHeader}
            />
        ));
    return sectionsArray;
}

const GetStartedPage = ({data}) =>
    <Layout className='alternating-row'>
        <SEO title="Get Started"/>
        {getProcessSections(data)}
    </Layout>
;

export default GetStartedPage;
