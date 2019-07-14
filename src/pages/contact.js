import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "../components/Button/button";
import ContactForm from "../components/ContactForm/contact-form";
import Layout from "../layouts/layout";
import SEO from "../components/seo";

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Page two" />
        <ContactForm email="contact.philip.nilsson@gmail.com" />
      </Layout>
    );
  }
}

export default ContactPage;
