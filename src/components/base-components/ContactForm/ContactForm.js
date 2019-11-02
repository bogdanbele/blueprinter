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
        const target = event.target;
        const value = target.value;
        const name = target.name;

        const pattern = RegExp(event.target.pattern);

        this.setState({
            [name]: value,
        });

        if ((pattern).test(value)) {
            target.setCustomValidity('');
            return
        }

        switch (name) {
            case "firstName": {
                target.setCustomValidity("Your first name should contain at least two characters");
                break;
            }
            case "lastName": {
                target.setCustomValidity("Your last name should contain at least two characters")
                break;
            }
            case "email": {
                target.setCustomValidity("Please enter a valid email")
                break;
            }
            case "message": {
                target.setCustomValidity("Your message has to be at least 20 characters long.")
                break;
            }
        }
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
                <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={this.handleChange}/>
                    </label>
                </p>
                <WhiteInputField
                    inputProps={{
                        required: true,
                        pattern: "[a-zA-Z]{2,20}",
                    }}
                    name="firstName"
                    label="first name"
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.firstName}
                />
                <WhiteInputField
                    inputProps={{
                        required: true,
                        pattern: "[a-zA-Z]{2,20}",
                    }}
                    name="lastName"
                    label="last name"
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.lastName}
                />
                <WhiteInputField
                    inputProps={{
                        required: true,
                        pattern: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$"
                    }}
                    name="email"
                    label="email"
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.email}
                />
                <div className='form-group'>
                    <WhiteInputField
                        inputProps={{
                            required: true,
                            pattern: "[a-zA-Z]{20,300}",
                        }}
                        aria-label="minimum height"
                        multiline={true}
                        rowsMax={10}
                        name="message"
                        onChange={this.handleInputChange}
                        value={this.state.message}
                        placeholder="Write us a message ( up to 300 characters )"/>
                </div>
                <div className='form-group'>

                    <Button
                        type="submit"
                        className="button Button--wide"
                    >Send</Button>
                </div>
            </form>
        );
    }
};

ContactForm.propTypes = {
    className: PropTypes.string
};


const WhiteInputField = withStyles({
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
