import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";

export default class ThemeInput extends React.PureComponent {

    state = {
        isValid: false,
        validation: '',
        value: ''
    };

    handleInputChange = event => {
        const target = event.target;
        const targetValue = target.value;

        this.setState({
            value: targetValue
        });

        this.setState({
            isValid: RegExp(this.state.validation).test(targetValue)
        });
    };


    handleValidation = name => {
        return !(
            this.state.value === '' ||
            RegExp(this.state.validation).test(this.state.value)
        );
    };

    render() {
        return (
            <ThemeInputStyle
                required={true}
                variant="outlined"
                error={this.handleValidation}
                name={this.props.name}
                label={this.props.labelName}
                helperText={
                    this.handleValidation
                        ? this.props.validationHelperText
                        : ''
                }
                onChange={this.handleInputChange}
                margin="normal"
                value={this.state.value || ''}
            />)
    }
}

ThemeInput.propTypes = {
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string,
    validationHelperText: PropTypes.string
}

const ThemeInputStyle = withStyles({
    root: {
        // Underline on Focus
        '& .MuiInput-underline:after': {
            borderColor: 'var(--color)',
        },

        '& .MuiOutlinedInput-notchedOutline': {
            color: 'var(--color)',
            borderColor: 'gray',
        },

        '& .MuiOutlinedInput-notchedOutline:hover': {
            color: 'var(--color)',
            borderColor: 'var(--color)',
        },

        '& .MuiOutlinedInput-root:hover': {
            color: 'var(--color)',
            borderColor: 'var(--color)',
        },

        '& .MuiInputBase-input': {
            color: 'var(--color)',
        },
        // Default Underline
        '& .MuiInput-underline:before': {
            borderColor: 'gray',
        },

        // Default Underline
        '& .MuiFormHelperText-root': {
            color: 'red',
        },

        // Text Color
        '& .MuiFormLabel-root': {
            color: 'var(--color)',
        },
    },
})(TextField);
