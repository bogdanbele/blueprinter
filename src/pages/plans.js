import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import PageHeader from '../components/template-components/PageHeader';
import PricingPlan from '../components/template-components/PricingPlan/PricingPlan';
import Row from '../components/base-components/Row';
import ScrollAnimation from "react-animate-on-scroll";
import styles from "../components/template-components/PricingPlan/PricingPlan.module.scss";

const getPricingPlans = data => {
	const pricingPlansArray = [];

	data.allContentfulPage.edges[0].node.contentSections.forEach((item, index) =>
		pricingPlansArray.push(
			<ScrollAnimation
				key={item.id}
				className={`d-flex pt-4 pb-3 ${styles.PricingPlanHolder}`}
				animateIn="fadeInUp"
				animateOnce={true}
				delay={500 * index}
				offset={100}
			>
				<PricingPlan
					data={item}
					index={index}
					/>
			</ScrollAnimation>
		)
	);
	return pricingPlansArray;
};

const PlansPage = ({data}) => {
	const page = data.allContentfulPage.edges[0].node;

	return (
		<Layout>
			<SEO title="Pricing plans"/>
			<PageHeader data={page}/>
			<Row
				holderClass="w-100-vw"
				className="justify-content-xs-center justify-content-md-between justify-content-lg-around justify-content-xl-center justify w-100 px-2 px-md-5"
			>
				{getPricingPlans(data)}
			</Row>
		</Layout>
	);
};

export const query = graphql`
    {
        allContentfulPage(filter: { title: { eq: "Pricing" } }) {
            edges {
                node {
                    title
                    headerText
                    header
                    isHeaderTextVisible
                    isHeaderVisible
                    contentSections {
                        ... on ContentfulPricingPlan {
                            id
                            price
                            title
                            features {
                                id
                                title
                                excerpt {
                                    excerpt
                                    id
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default PlansPage;
