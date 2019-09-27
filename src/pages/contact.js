import React, { Component } from "react";
import Layout from "../layouts/layout";
import SEO from "../components/seo";
import {ContactForm, Row} from "blueprint-components-react";

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
