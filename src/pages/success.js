import React from 'react';
import Layout from "../components/layout-components/layouts/layout";
import PageHeader from "../components/template-components/PageHeader";
import SEO from "../components/base-components/seo";
import Row from "../components/base-components/Row";
import Item from "../components/base-components/Item";

const SuccessPage = () => {

    let actionText = '';
    if (typeof window !== 'undefined') {
        actionText = window.history.state !== null ? window.history.state.actionText : '';
    }

        return (
        <Layout>
            <SEO title="Success"/>
            <PageHeader/>
            <Row>
                <Item className='align-items-center'>
                    <h2>Thanks for contacting <span className='font-weight-bold'> ncweb</span>! </h2>
                    <p> Keep an eye on your inbox! One of our colleagues will get back to you {actionText} within the next few days.</p>
                    <Item>
                        <p className='mt-5 mb-2'>Best regards,</p>
                        <p>ncweb team</p>
                    </Item>
                </Item>
            </Row>
        </Layout>
    )
};

export default SuccessPage