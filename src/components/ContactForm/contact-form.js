import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactForm extends Component {
  render() {
    const { email } = this.props;
    return (
      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action={buildFormContact(email)}
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <span className="span-highlight"/>
            <span className="span-bar"/>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-address">Email Address</label>
            <span className="span-highlight"/>
            <span className="span-bar"/>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.tld"
              required=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <span className="span-highlight"/>
            <span className="span-bar"/>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
              required=""
            />
          </div>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input type="submit" value="Submit" className="button button--primary button--wide"/>
      </form>
    );
  }
}

function buildFormContact(email) {
  return "https://formspree.io/" + email;
}

ContactForm.propTypes = {
  email: PropTypes.string
};

export default ContactForm;
