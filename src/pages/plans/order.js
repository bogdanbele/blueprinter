import React, {useEffect, useState} from 'react';
import {graphql} from 'gatsby';
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
import Flex from "../../components/base-components/Flex";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

const OrderPage = ({data}) => {
    let defaultValues = {
        extra: [],
        email: '',
        message: '',
    };

    const [values, setValue] = useState(defaultValues);

    function handleSubmit(e) {
        let objectToSend = {
            extra: values['extra'].join('\n'),
            email: values['email']
        };

        console.log(objectToSend);
        const obj = encode({'form-name': 'Website Quote', ...objectToSend});

        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: obj,
        })
            .then(() => navigate('/'))
            .catch(error => alert(error));
        e.preventDefault()
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
        const name = target.name;
        setValue({...values, [name]: value})
    };

    const handleChange = event => {
        setValue({...values, ['extra']: event.target.value});
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

    //TODO Add Fields for email, phone number option, and description ( comments ) optional.

    function returnList() {
        return (
            <>
                <h2 className='mt-2'>Choose Some Extra Plans</h2>
                <Select
                    className='mb-5'
                    name={"extra[]"}
                    labelId="label"
                    style={{color: 'charcoal', backgroundColor: 'aliceblue'}}
                    multiple
                    variant={'outlined'}
                    value={values['extra'] ? values['extra'] : []}
                    onChange={handleChange}
                    input={
                        <Input
                            className="px-4"
                            value={() => values['extra'].join('\n')}
                            name='extra'/>}
                    renderValue={() => values['extra'].join(',')}
                    MenuProps={MenuProps}
                >
                    {console.log(missingPlans)}
                    {console.log(values)}

                    {missingPlans.map(name => {
                        return (
                            <MenuItem key={name.title} value={name.title}>
                                <Checkbox
                                    checked={values['extra'].indexOf(name.title) > -1}/>
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

    return (
        <Layout>
            <SEO title="Order"/>
            <PageHeader
                header={page.header}
                headerText={page.headerText}
                isHeaderVisible={page.isHeaderVisible}
                isHeaderTextVisible={page.isHeaderTextVisible}
            />

            <Row className="column align-items-center">
                <Flex className='w-75'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex-column d-flex w-100'
                        name='Website Quote'
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <ThemeInputStyle
                            required={true}
                            variant="outlined"
                            name="company"
                            label="Company Name"
                            onChange={handleInputChange}
                            margin="normal"
                            value={values['email'] || ''}
                        />
                        <ThemeInputStyle
                            required={true}
                            variant="outlined"
                            name="email"
                            label="Email"
                            onChange={handleInputChange}
                            margin="normal"
                            value={values['email'] || ''}
                        />

                        <ThemeInputStyle
                            required={true}
                            variant="outlined"
                            rows={5}
                            rowsMax={10}
                            multiline={true}
                            name="message"
                            label="Message"
                            onChange={handleInputChange}
                            margin="normal"
                            value={values['message'] || ''}
                        />
                        {isInOrderFlow ? returnList() : <h2>Please follow to purchase flow</h2>}
                        <Button
                            type="submit"
                            className="button"
                        >Send
                        </Button>
                    </form>
                </Flex>
            </Row>
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
