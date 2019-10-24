import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        // Underline on Focus
        '& .MuiInput-underline:after': {
            borderColor: 'white'
        },

        '& .MuiInputBase-input' : {
            color : 'white'
        },

        // Default Underline
        '& .MuiInput-underline:before': {
            borderColor: 'gray',
        },

        // Default Underline Hover
        '& .MuiInput-root:hover:not($disabled):before': {
            borderBottom: '2px solid white'
        },

        // Text Color
        '& .MuiFormLabel-root': {
            color: 'white',
        }
    }
})(TextField);

export default class ContactForm extends React.PureComponent {

    render() {
        const {email, className} = this.props;
        return (
            <form
                id="fs-frm"
                className={`${styles.ContactForm}${className ? ` ${className}` : ''}`}
                name="simple-contact-form"
                acceptCharset="utf-8"
                action={buildFormContact(email)}
                method="post"
                netlify
            >
                <fieldset id="fs-frm-inputs">
                    <div className="form-group">
                        <CssTextField
                            id="standard-name"
                            label="Name"
                            margin="normal"
                        />
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
};

function buildFormContact(email) {
    return 'https://formspree.io/' + email;
};

ContactForm.propTypes = {
    className: PropTypes.string,
    email: PropTypes.string,
};
