import React, {Component} from 'react';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import Flex from '../components/base-components/Flex';

class Credits extends Component {
    render() {
        return (
            <Layout>
                <SEO title="credits"/>
                <Row className='centered Row--header'>
                    <Flex className='column flex--1 flex--text-center'>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </Flex>
                </Row>
            </Layout>
        );
    }
}

export default Credits;
