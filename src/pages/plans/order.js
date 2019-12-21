import React, {useEffect, useState} from 'react';
import {graphql, Link, StaticQuery} from 'gatsby';
import Layout from '../../components/layout-components/layouts/layout';
import SEO from '../../components/base-components/seo';
import PageHeader from '../../components/template-components/PageHeader';
import Row from '../../components/base-components/Row';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import {navigate} from "gatsby-link";
import Button from "../../components/base-components/Button";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "../../components/layout-components/ContactForm/ContactForm.module.scss";
import {InputLabel} from "@material-ui/core";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}


const OrderPage = ({data}) => {
    const [values, setValue] = useState({});

    function handleSubmit() {

        let objectToSend = {
            extraPlans: values['extraPlans'].join('\n'),
            email: values['email']
        };

        console.log(objectToSend)
        const obj = encode({'form-name': 'Website Quote', ...objectToSend});
        console.log(obj)

        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: obj,
        })
            .then(() => navigate('/'))
            .catch(error => alert(error));
    };


    let orderArray = [];
    let isInOrderFlow = [];
    if (typeof window !== 'undefined') {
        orderArray = window.history.state !== null ? window.history.state.order : [];
        isInOrderFlow = window.history.state !== null ? true : false;
    }

    const allPlans = data.allContentfulPlanFeature.edges;

    let missingPlans = null;

    const page = data.allContentfulPage.edges[0].node;

    const handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        console.log(target)
        console.log(value)

        const name = target.name;

        setValue({...values, [name]: value})
    };

    const handleChange = event => {
        setValue({...values, ['extraPlans']: event.target.value});

        console.log(event.target.value)
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    function consoleLog() {
        console.log(values)
        console.log(encode(values))
    }

    //TODO Add Fields for email, phone number option, and description ( comments ) optional.

    function returnList() {
        return (
            <>
                <h2>Select some extra features</h2>
                <InputLabel id="label">Choose Some Extra PlansAge</InputLabel>
                <Select
                    labelId="label"
                    id="demo-mutiple-checkbox"
                    style={{color: 'charcoal', backgroundColor: 'aliceblue'}}
                    multiple
                    variant={'outlined'}
                    value={values['extraPlans'] ? values['extraPlans'] : []}
                    onChange={handleChange}
                    input={<Input className="px-4"/>}
                    renderValue={values['extraPlans'] ? () => values['extraPlans'].join(',') : () => ''}
                    MenuProps={MenuProps}
                >
                    {console.log(missingPlans)}
                    {console.log(values)}

                    {missingPlans.map(name => {
                        return (
                            <MenuItem key={name.title} value={name.title}>
                                <Checkbox
                                    checked={values['extraPlans'] ? values['extraPlans'].indexOf(name.title) > -1 : false}/>
                                <ListItemText primary={name.title}/>
                            </MenuItem>
                        );
                    })}
                </Select>
            </>
        );
    }

    useEffect(() => {
        if (window.history.state) {
            console.log(missingPlans);
        } else {
            console.log('wrong way buddy');
        }
    });

    let selectedPlansFilter = orderArray.map(plan => {
        return plan.id;
    });

    missingPlans = allPlans
        .filter(plan => !selectedPlansFilter.includes(plan.node.id))
        .map(plan => {
            return {title: plan.node.title, excerpt: plan.node.excerpt.excerpt};
        });

    console.log(isInOrderFlow);
    return (
        <Layout>
            <SEO title="Order"/>
            <PageHeader
                header={page.header}
                headerText={page.headerText}
                isHeaderVisible={page.isHeaderVisible}
                isHeaderTextVisible={page.isHeaderTextVisible}
            />

                <Row className="around column">
                    <form
                        className='flex-column d-flex'
                        name='Website Quote'
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                    {isInOrderFlow ? returnList() : <p>Please follow to purchase flow</p>}
                    <ThemeInputStyle
                        required={true}
                        variant="outlined"
                        name="email"
                        label="Email"
                        onChange={handleInputChange}
                        margin="normal"
                        value={values['email'] || ''}
                    />
                    </form>
                </Row>

            <Button onClick={consoleLog}>Click</Button>
            <Button onClick={handleSubmit}>Click</Button>

        </Layout>
    );
};

export const query = graphql`
    {
        allContentfulPage(filter: { title: { eq: "Order" } }) {
            edges {
                node {
                    title
                    headerText
                    header
                    isHeaderTextVisible
                    isHeaderVisible
                }
            }
        }
        allContentfulPlanFeature {
            edges {
                node {
                    id
                    title
                    excerpt {
                        excerpt
                        id
                    }
                }
            }
        }
    }
`;


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

export default OrderPage;
