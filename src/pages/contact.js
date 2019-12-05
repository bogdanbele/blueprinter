import React, {Component} from 'react';
import Layout from '../components/layout-components/layouts/layout';
import SEO from '../components/base-components/seo';
import Row from '../components/base-components/Row';
import ContactForm from '../components/layout-components/ContactForm';
import Flex from '../components/base-components/Flex';

class ContactPage extends Component {
	render() {
		return (
			<Layout>
				<SEO title="contact"/>
				<Row className='centered Row--header'>
					<Flex className='column flex--1 flex--text-center'>
						<h3>Use the form below to address any general questions or inquiries you may have pertaining to
							NCWeb or our website.</h3>
					</Flex>
					<ContactForm/>
					<Flex className='column flex--2 flex--self-centered'>
						<h3>REACH OUT TO THE TEAM</h3>
						<p>You can also reach us out directly by email.</p>
						<p>
                            Alberto Martínez<br/>
                            CEO and Co-Founder<br/>
                            alberto@ncweb.eu<br/>
                            +45 53825110</p>
					</Flex>
				</Row>
			</Layout>
		);
	}
}

export default ContactPage;
