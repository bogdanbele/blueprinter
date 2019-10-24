import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {navigate} from "gatsby-link";
import Button from "../Button";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class ContactForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };

    handleSubmit = e => {
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": form.getAttribute('name'), ...this.state})
        })
            .then(() => navigate("/"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value,
        });
        console.log(this.state)
    };


    render() {
        const {className} = this.props;
        return (
            <form
                className={`${styles.ContactForm}${className ? ` ${className}` : ''}`}
                name="Contact Form"
                acceptCharset="utf-8"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
                <input type="hidden" name="form-name" value="contact"/>
                <CssTextField
                    name="firstName"
                    label="first name"
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.firstName}
                />
                <CssTextField
                    name="lastName"
                    label="last name"
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.lastName}
                />
                <CssTextField
                    name="email"
                    label="email"
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.email}
                />
             <div className='form-group'>
                <CssTextField
                    aria-label="minimum height"
                    multiline={true}
                    rowsMax={10}
                    name="message"
                    onChange={this.handleInputChange}
                    value={this.state.message}
                    placeholder="message"/>
             </div>
                <div className='form-group'>

                    <Button type="submit" className="button Button--wide">Send</Button>
                </div>
                </form>
        );
    }
};

ContactForm.propTypes = {
    className: PropTypes.string
};


const CssTextField = withStyles({
    root: {
        // Underline on Focus
        '& .MuiInput-underline:after': {
            borderColor: 'white'
        },

        '& .MuiInputBase-input': {
            color: 'white'
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
