import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";

export default function ThemeInput(props) {
    return (
        <ThemeInputStyle
            {...props}
            variant="outlined"
            margin="normal"
            value={props.value || ''}
        />)
}

ThemeInput.propTypes = {
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string,
    validation: PropTypes.string,
    validationHelperText: PropTypes.string
};

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
