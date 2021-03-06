import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';
import { navigate } from 'gatsby-link';
import Button from '../../base-components/Button';
import ThemeInput from "../../base-components/ThemeInput/ThemeInput";
import {encode} from "../../../utils/helpers/data-utils";

export default class ContactForm extends React.Component {
	state = {
		values: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
		isValid: {
			firstName: false,
			lastName: false,
			email: false,
			message: false,
		},
		validation: {
			firstName: '^[A-Za-zÀ-ÖØ-öø-ÿa-zšđčćž\\s]{2,20}$',
			lastName: '^[A-Za-zÀ-ÖØ-öø-ÿa-zšđčćž\\s]{2,20}$',
			email: '^[A-Za-zÀ-ÖØ-öø-ÿ0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$',
			message: '^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\\s.,\'-;:%&()!_]{0,300}$',
		},
		wasBlurred: {
			firstName: false,
			lastName: false,
			email: false,
			message: false,
		},
	};

	handleSubmit = e => {
		const form = e.target;
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': form.getAttribute('name'), ...this.state.values }),
		})
			.then(() => navigate('/success/', {
				state : {
					actionText: "",
				}
			}))
			.catch(error => alert(error));

		e.preventDefault();
	};


	handleInputChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			values: { ...this.state.values, [name]: value },
		});

		if(value === ''){
			this.setState({
				wasBlurred: { ...this.state.wasBlurred, [name]: false } ,
			});
		}
	};

	handleValidation = name => {
		return !(
			!this.state.wasBlurred[name] || this.state.values[name] === '' ||
			RegExp(this.state.validation[name]).test(this.state.values[name])
		);
	};

	handleBlur= event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			isValid: { ...this.state.isValid, [name]: RegExp(this.state.validation[name]).test(value) },
			wasBlurred: { ...this.state.wasBlurred, [name]: true } ,
		});

		console.log(this.state.wasBlured)
	};


	isFormValid = () => {
		for (let key in this.state.isValid) {
			if (this.state.isValid.hasOwnProperty(key)) {
				if (this.state.isValid[key] === false) {
					return false;
				}
			}
		}
		return true;
	};

	render() {
		const { className } = this.props;
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
				<input type="hidden" name="form-name" value="contact" />
				<p hidden>
					<label>
						Don’t fill this out: <input name="bot-field" onChange={this.handleInputChange} />
					</label>
				</p>
				<ThemeInput
					onBlur={this.handleBlur}
					required={true}
					variant="outlined"
					name="firstName"
					label="First name"
					error={this.handleValidation('firstName')}
					helperText={
						this.handleValidation('firstName')
							? 'Please write up to 20 characters text on your first name (only letters)'
							: ''
					}
					onChange={this.handleInputChange}
					margin="normal"
					value={this.state.values.firstName || ''}
				/>
				<ThemeInput
					onBlur={this.handleBlur}
					required={true}
					variant="outlined"
					error={this.handleValidation('lastName')}
					name="lastName"
					label="Last name"
					helperText={
						this.handleValidation('lastName')
							? 'Please write up to 20 characters text on your last name (only letters)'
							: ''
					}
					onChange={this.handleInputChange}
					margin="normal"
					value={this.state.values.lastName || ''}
				/>
				<ThemeInput
					onBlur={this.handleBlur}
					required={true}
					variant="outlined"
					error={this.handleValidation('email')}
					helperText={this.handleValidation('email') ? 'You must input a valid email' : ''}
					name="email"
					label="Email"
					onChange={this.handleInputChange}
					margin="normal"
					value={this.state.values.email || ''}
				/>
				<div className="form-group">
					<ThemeInput
						required={true}
						variant="outlined"
						aria-label="minimum height"
						helperText={
							this.handleValidation('message')
								? 'Your message must be between 20 and 300 characters'
								: ''
						}
						multiline={true}
						rows={5}
						rowsMax={10}
						name="message"
						onChange={this.handleInputChange}
						value={this.state.values.message}
						placeholder="How can we help you? Write us a message! (max. 300 words)"
					/>
				</div>
				<div className="form-group">
					<Button
						disabled={!this.isFormValid()}
						type="submit"
						className="button Button--wide"
					>
						Send
					</Button>
				</div>
			</form>
		);
	}
}

ContactForm.propTypes = {
	className: PropTypes.string,
};
