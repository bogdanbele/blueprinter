import React, { Component } from "react";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import Row from "../components/base-components/Row";
import ContactForm from "../components/base-components/ContactForm";

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="contact" />
        <Row>
        <ContactForm email="contact.philip.nilsson@gmail.com" />
        </Row>
      </Layout>
    );
  }
}

export default ContactPage;
