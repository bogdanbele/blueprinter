import React, {useState} from 'react';
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
import Flex from "../../components/base-components/Flex";
import ThemeInput from "../../components/base-components/ThemeInput/ThemeInput";
import {encode} from "../../utils/helpers/data-utils";
import {PlanFeature} from "../../components/template-components/PricingPlan/PricingPlan";
import Item from "../../components/base-components/Item";

const OrderPage = ({data}) => {

    //region Default Input Objects
    let defaultValues = {
        extra: [],
        email: '',
        message: '',
        company: '',
        phone: '',
        discountCode: ''
    };

    const validation = {
        company: '^[A-Za-zÀ-ÖØ-öø-ÿa-zšđčćž\\s]{0,20}$',
        phone: '^$|^[0-9\\s+]{8,14}$',
        email: '^[A-Za-zÀ-ÖØ-öø-ÿ0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,63}$',
        message: '^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\\s.,\'-;:%&()!_]{0,300}$',
    };

    const isInitiallyValid = (field) => {
        return RegExp(validation[field]).test(defaultValues[field]);
    };

    let isValueInitiallyValid = {
        firstName: isInitiallyValid('firstName'),
        lastName: isInitiallyValid('lastName'),
        email: isInitiallyValid('email'),
        message: isInitiallyValid('message'),
    };
    //endregion

    //region State
    const [values, setValue] = useState(defaultValues);
    const [isValueValid, setIsValueValid] = useState(isValueInitiallyValid);
    //endregion

    //region Handlers and Validators
    /**
     *  Returns true if the input is passes it's corresponding regex test
     * @param name
     * @returns {boolean}
     */
    const isValid = name => {
        return (
            RegExp(validation[name]).test(values[name])
        );
    };

    /**
     *
     * @param event
     */
    const handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValue({...values, [name]: value});
        setIsValueValid({...isValueValid, [name]: RegExp(validation[name]).test(value)});
        console.log(values)
    };

    const isDiscountCodeValid = () => {
        return discountCodesObject.map(elem => {
            return elem.toLowerCase() === values['discountCode'].toLowerCase();
        });
    };

    const returnValidDiscountCode = () => {
        return discountCodesObject.filter(elem => {
            return elem.toLowerCase() === values['discountCode'].toLowerCase();
        })
    };

    /**
     * Sets the [extra features] input's value to it's corresponding state
     * @param event
     */
    const handleFeatureChange = event => {
        setValue({...values, ['extra']: event.target.value});
    };

    /**
     * Return true if all inputs are valid
     * @returns {boolean}
     */
    const isFormValid = () => {
        for (let key in isValueValid) {
            if (isValueValid.hasOwnProperty(key)) {
                if (isValueValid[key] === false) {
                    return false;
                }
            }
        }
        return true;
    };

    /**
     * Form submission to Netlify
     * @param e
     */
    const handleSubmit = (e) => {
        let objectToSend = {
            extra: values['extra'].join('\n'),
            email: values['email'],
            message: values['message'],
            company: values['company'],
            phone: values['phone'],
            planFeature: selectedPlansAsString,
            planTitle: window.history.state.title,
            discountCode: isDiscountCodeValid() ? returnValidDiscountCode()[0] : ''
        };
        const obj = encode({'form-name': 'Website Quote', ...objectToSend});

        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: obj,
        })
            .then(() => navigate('/success/', {
                state : {
                    data: "Quote Submitted",
                }
            }).then())
            .catch(error => alert(error));
        e.preventDefault()
    };

    //endregion

    //region Order Initialization and Content Locking
    let preselectedPlansArray = [];
    let isInOrderFlow = [];
    let preselectedPlansTitle = '';
    if (typeof window !== 'undefined') {
        preselectedPlansArray = window.history.state !== null ? window.history.state.order : [];
        isInOrderFlow = window.history.state !== null;
        preselectedPlansTitle = window.history.state !== null ? window.history.state.title : '';
    }
    //endregion

    //region DropDown Styling
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
    //endregion

    //region Plans Setup
    const allPlans = data.allContentfulPlanFeature.edges;
    const allDiscountCodes = data.allContentfulDiscountCodes.edges;

    let missingPlansObject = null;
    let selectedPlansObject = null;
    const page = data.allContentfulPage.edges[0].node;

    let selectedPlansFilter = preselectedPlansArray.map(plan => {
        return plan.id;
    });

    const discountCodesObject = allDiscountCodes.map(discountCode => {
        return discountCode.node.discountCode
    });

    missingPlansObject = allPlans
        .filter(plan => !selectedPlansFilter.includes(plan.node.id))
        .map(plan => {
            return {title: plan.node.title, excerpt: plan.node.excerpt.excerpt};
        });

    selectedPlansObject = allPlans
        .filter(plan => selectedPlansFilter.includes(plan.node.id))
        .map(plan => {
            return {title: plan.node.title, excerpt: plan.node.excerpt.excerpt, id: plan.node.id};
        });

    let selectedPlansAsString = (preselectedPlansArray.map(plan => {
        return plan.title;
    })).join('\n');
    //endregion

    //region Rendering

    const returnPreselectedPlans = () => {
        return (
            <>
                <h2 className='font-weight-normal'>The <span
                    className='font-weight-bold'> {preselectedPlansTitle}</span> plan </h2>
                {selectedPlansObject.map(name => {
                        return (
                            <div className='w-75' key={name.id}>
                                <PlanFeature featureName={name.title}/>
                            </div>
                        )
                    }
                )}
            </>
        )
    };

    const returnList = () => {
        return (
            <>
                <h2 className='mt-2'>Choose extra features (optional)</h2>
                <Item
                    className='mb-5'
                    style={{
                        backgroundColor: 'var(--color)',
                        padding: '1px'
                    }}>
                    <Select
                        className='p-0'
                        name={"extra[]"}
                        labelId="label"
                        style={{
                            color: 'var(--color)',
                            backgroundColor: 'var(--bg-highlight)',
                            borderColor: 'var(--color)',
                            borderWidth: '2px'
                        }}
                        multiple
                        variant={'outlined'}
                        value={values['extra'] ? values['extra'] : []}
                        onChange={handleFeatureChange}
                        input={
                            <Input
                                className="px-4"
                                value={() => values['extra'].join('\n')}
                                name='extra'/>}
                        renderValue={() => (values['extra'] !== []) ? values['extra'].join(',') : 'optional'}
                        MenuProps={MenuProps}
                    >
                        {missingPlansObject.map(name => {
                            return (
                                <MenuItem key={name.title} value={name.title}>
                                    <Checkbox
                                        checked={values['extra'].indexOf(name.title) > -1}/>
                                    <ListItemText primary={name.title}/>
                                </MenuItem>
                            );
                        })}
                    </Select>
                </Item>
            </>
        );
    }

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
                {isInOrderFlow ? returnPreselectedPlans() : null}
                <Flex className='w-75'>

                    { // If the user didn't specify a plan on the previous page, disable access to the form
                        isInOrderFlow ?
                            <form
                                onSubmit={handleSubmit}
                                className='flex-column d-flex w-100'
                                name='Website Quote'
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                            >
                                <input
                                    hidden
                                    type='text'
                                    name='planTitle'
                                />
                                <input
                                    hidden
                                    type='text'
                                    name='planFeature'
                                />
                                <ThemeInput
                                    variant="outlined"
                                    name="company"
                                    label="Company Name"
                                    error={!isValid('company')}
                                    helperText={!isValid('company') ? 'Please write up to 20 characters' : ''}
                                    onChange={handleInputChange}
                                    margin="normal"
                                    value={values['company']}
                                />
                                <ThemeInput
                                    required={true}
                                    variant="outlined"
                                    error={!isValid('email')}
                                    name="email"
                                    label="Email"
                                    helperText={!isValid('email') ? 'You must input a valid email' : ''}
                                    onChange={handleInputChange}
                                    validation={validation.email}
                                    value={values['email']}
                                />

                                <ThemeInput
                                    name="message"
                                    label="Message"
                                    error={!isValid('message')}
                                    variant="outlined"
                                    rows={5}
                                    rowsMax={10}
                                    multiline={true}
                                    onChange={handleInputChange}
                                    helperText={!isValid('message') ? 'Please write up to 300 characters' : ''}
                                    validation={validation.message}
                                    value={values['message']}
                                />
                                <ThemeInput
                                    name='phone'
                                    label='Phone'
                                    error={!isValid('phone')}
                                    helperText={!isValid('phone') ? 'Please input a valid phone number or leave empty' : ''}
                                    validation={validation.company}
                                    onChange={handleInputChange}
                                    value={values['phone']}/>
                                {returnList()}
                                <h2 className='mt-5 mb-0'>Do you have a discount code?</h2>
                                <ThemeInput
                                    autoComplete="new-password"
                                    name='discountCode'
                                    label='Discount Code'
                                    onChange={handleInputChange}
                                    value={values['discountCode']}/>

                                <Button
                                    type="submit"
                                    className="button mt-5"
                                    disabled={!isFormValid()}
                                >Send
                                </Button>
                            </form>
                            : <h2>Please follow to purchase flow</h2>}
                </Flex>
            </Row>
        </Layout>
    );
    //endregion
};

//region Query

export const query = graphql`
    {
        allContentfulPage(filter: {title: {eq: "Order"}}) {
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
        allContentfulDiscountCodes {
            edges {
                node {
                    id
                    title
                    percentageOff
                    discountCode
                }
            }
        }
    }

`;
//endregion

export default OrderPage;
