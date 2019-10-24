import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {navigate} from "gatsby-link";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class ContactForm extends React.PureComponent {

    state = {
        firstName : '',
        lastName : '',
        email: '',
        message: ''
    };

    handleSubmit = (e) => {
        const state = this.state;
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    };

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        })
        console.log(this.state)
    }
    

    render() {
        const {email, className} = this.props;
        return (
            <form
                id="fs-frm"
                className={`${styles.ContactForm}${className ? ` ${className}` : ''}`}
                name="simple-contact-form"
                acceptCharset="utf-8"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
            <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
                        <CssTextField
                            name="firstName"
                            id="standard-name"
                            label="Name"
                            onChange={this.handleInputChange}
                            margin="normal"
                        />
                        <label htmlFor="full-name">Full Name</label>
                        <span className="span-highlight"/>
                        <span className="span-bar"/>
                        <input
                            type="text"
                            name="lastName"
                            id="full-name"
                            onChange={this.handleInputChange}
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
                            name="email"
                            onChange={this.handleInputChange}
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
                <button type="submit" value="Submit" className="button button--primary button--wide"/>
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
