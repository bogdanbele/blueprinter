import React, {useEffect, useState} from 'react';
import Layout from "../components/layout-components/layouts/layout";
import PageHeader from "../components/template-components/PageHeader";
import SEO from "../components/base-components/seo";
import Row from "../components/base-components/Row";

const SuccessPage = () => {
    return (
        <Layout>
            <SEO title="Success"/>
            <PageHeader/>
            <Row>
                <h2>Thanks for being awesome!</h2>
                <p>We appreciate you contacting <span className='font-weight-bold'> ncweb.</span> One of our colleagues
                    will get back in touch with
                    you soon!.</p>
            </Row>
        </Layout>
    )
};

export default SuccessPage