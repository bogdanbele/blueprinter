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
        values: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        isValid: {
            firstName: false,
            lastName: false,
            email: false,
            message: false
        },
        validation: {
            firstName: "[a-zA-Z]{2,20}",
            lastName: "[a-zA-Z]{2,20}",
            email: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$",
            message: "^[a-zA-Z\\s.*]{20,300}$"
        }
    };


    handleSubmit = e => {
        const form = e.target;
        console.log(form)
        console.log(this.state.values)
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": form.getAttribute('name'), ...this.state.values})
        })
            .then(() => navigate("/"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            values: {...this.state.values, [name]: value}
        });

        this.setState({
            isValid: {...this.state.isValid, [name]: (RegExp(this.state.validation[name]).test(value))}
        });

        console.log(this.handleFormValidation())
    };

    handleValidation = name => {
        return !(this.state.values[name] === '' || (RegExp(this.state.validation[name]).test(this.state.values[name])))
    };

    handleFormValidation = () => {
        for (let key in this.state.isValid) {
            if (this.state.isValid.hasOwnProperty(key)) {
                if (this.state.isValid[key] === false) {
                    return false
                }
            }
        }
        return true
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
                        Don’t fill this out: <input name="bot-field" onChange={this.handleInputChange}/>
                    </label>
                </p>
                <WhiteInputField
                    required={true}
                    variant="outlined"
                    name="firstName"
                    label="first name"
                    error={this.handleValidation('firstName')}
                    helperText={this.handleValidation('firstName') ? "Your first name must be between 2 and 20 characters long" : ''}
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.values.firstName || ''}
                />
                <WhiteInputField
                    required={true}
                    variant="outlined"
                    error={this.handleValidation('lastName')}
                    name="lastName"
                    label="last name"
                    helperText={this.handleValidation('lastName') ? "Your last name must be between 2 and 20 characters long" : ''}
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.values.lastName || ''}
                />
                <WhiteInputField
                    required={true}
                    variant="outlined"
                    error={this.handleValidation('email')}
                    helperText={this.handleValidation('email') ? "You must input a valid email" : ''}
                    name="email"
                    label="email"
                    onChange={this.handleInputChange}
                    margin="normal"
                    value={this.state.values.email || ''}
                />
                <div className='form-group'>
                    <WhiteInputField
                        required={true}
                        variant="outlined"
                        aria-label="minimum height"
                        helperText={this.handleValidation('message') ? "Your message must be between 20 and 300 characters" : ''}
                        multiline={true}
                        rows={5}
                        rowsMax={10}
                        name="message"
                        onChange={this.handleInputChange}
                        value={this.state.values.message}
                        placeholder="Write us a message ( up to 300 characters )"/>
                </div>
                <div className='form-group'>

                    <Button
                        disabled={!this.handleFormValidation()}
                        type="submit"
                        className="button Button--wide"
                    >Send</Button>
                </div>
            </form>
        );
    }
};

ContactForm
    .propTypes = {
    className: PropTypes.string
};


const
    WhiteInputField = withStyles({
        root: {
            // Underline on Focus
            '& .MuiInput-underline:after': {
                borderColor: 'white'
            },

            '& .MuiOutlinedInput-notchedOutline': {
                color: 'white',
                borderColor: 'gray'
            },

            '& .MuiOutlinedInput-notchedOutline:hover': {
                color: 'white',
                borderColor: 'white'
            },

            '& .MuiOutlinedInput-root:hover': {
                color: 'white',
                borderColor: 'white'
            },

            '& .MuiInputBase-input': {
                color: 'white'
            },

            // Default Underline
            '& .MuiInput-underline:before': {
                borderColor: 'gray',
            },

            // Default Underline
            '& .MuiFormHelperText-root': {
                color: 'red',
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
