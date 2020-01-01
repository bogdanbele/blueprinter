import React from 'react';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import {graphql} from 'gatsby';
import ContactForm from '../components/layout-components/ContactForm';
import PageHeader from '../components/template-components/PageHeader';
import MiniContent from '../components/template-components/MiniContent/MiniContent';
import Row from "../components/base-components/Row";
import ScrollAnimation from "react-animate-on-scroll";

const ContactPage = ({data}) => {
	const page = data.allContentfulPage.edges[0].node;
	const pageSections = page.contentSections;
	return (
		<Layout>
			<SEO title="contact"/>
			<PageHeader
				data={page}
			/>
			<ScrollAnimation
				animateOnce={true}
				className={'d-flex w-100'}
				animateIn={'fadeIn'}
				offset={250}
			>
				<Row>

					<ContactForm/>
					<MiniContent
						data={pageSections[0]}
						flexClassName={'justify-content-center flex--2'}
					/>
				</Row>
			</ScrollAnimation>

		</Layout>
	);
};

export const query = graphql`
    {
        allContentfulPage(filter: { title: { eq: "Contact" } }) {
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
                            ... on ContentfulMiniContent {
                                id
                                description
                                title
                                header
                                list
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default ContactPage;
