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
                <Row className='justify-content-center Row--header'>
                    <Flex className='column flex--1 text-center'>
                        <h1>Thanks people</h1>
                        <h3>Thanks to everyone who contributed to our project.<br/>
                            Bellow is a list full of people who helped ncweb come to life</h3>
                    </Flex>
                    <Flex className='column flex--1 text-center'>
                        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </Flex>
                </Row>
            </Layout>
        );
    }
}

export default Credits;
