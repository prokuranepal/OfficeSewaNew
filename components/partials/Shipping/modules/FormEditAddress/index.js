import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { Form, Input, Select } from 'antd';
import { makeStyles, useTheme } from '@material-ui/styles';
// import { color_var, color_black } from '../../../../public/static/data/dy_dummy_data_category';
import { provinces, provinces_districts, zones, districts_zones, districts_places } from '../../../../../public/data/places';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import * as actions from '../../../../store/shipping/action';
// import { CREATE_ADDRESS, UPDATE_ADDRESS } from '../../../../apollo/shipping/shipping';
// import { useMutation } from '@apollo/client';
import CustomButton from '../../../../elements/CustomButton'


const FormEditShippingAddress = props => {
    const router = useRouter();
    // console.log(router.query)
    // const dispatch = useDispatch();

    // const [createAddress, data_create] = useMutation(CREATE_ADDRESS);
    // const [updateAddress, data_update] = useMutation(UPDATE_ADDRESS);

    const classes = useStyles();
    const [state, setState] = useState({
        formData: props.data ? props.data : {
            firstName: null,
            lastName: null,
            companyName: null,
            phone: null,  //mobile number
            streetAddress1: null,   //province
            streetAddress2: null,   //district
            city: null,       //place
            cityArea: null,   //landmark
            postalCode: null,
            country: "NP",
            countryArea: null, //panVatNumber
            pan: null

        },
        saveAdd: props.data ? true : false,
        buttonText: props.data ? "Save Address" : "Add Address"

    })

    const handleLoginSubmit = () => {
        // console.log(state.formData);
        if (state.saveAdd) {
            // console.log("Update");
            const addressData = { ...state.formData };
            delete addressData.id;
            delete addressData.__typename;
            delete addressData.country;
            delete addressData.isDefaultShippingAddress;
            delete addressData.isDefaultBillingAddress;
            delete addressData.tags;
            delete addressData.key;
            addressData.country = "NP";
            // console.log(addressData);
            // updateAddress({ variables: { input: addressData, id: state.formData.id } })
        } else {
            // createAddress({ variables: { input: state.formData, type: "SHIPPING" } });
        }
        // router.push('/account/shipping');
        props.close();
    };

    // useEffect(() => {
    //     // console.log(state);
    //     // console.log(data_create);
    //     if (data_create.data && data_create.data.accountAddressCreate) {
    //         // console.log(data_create.data);
    //         dispatch(actions.setAddresses(data_create.data.accountAddressCreate));
    //         props.close();
    //     }
    // }, [data_create]);

    // useEffect(() => {
    //     // console.log(state);
    //     // console.log(data_update);
    //     if (data_update.data && data_update.data.accountAddressUpdate) {
    //         // console.log(data_update.data);
    //         dispatch(actions.setAddresses(data_update.data.accountAddressUpdate));
    //         props.close();
    //     }
    // }, [data_update]);

    const onChangeState = (e, inputType, stateType) => {
        // console.log("target value", stateType, e.target.value)
        inputType == "input" ?
            setState({ ...state, formData: { ...state.formData, [stateType]: e.target.value } }) :
            setState({ ...state, formData: { ...state.formData, [stateType]: e } })
    }

    const color_val = 'red';
    return (
        <Form
            // onFinish={handleLoginSubmit}
            // formLayout = 'vertical'
            >
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <div className={classes.formItem}>
                        <Form.Item
                            name="mobileNumber"
                            // label="Mobile Number"
                            rules={[
                                {
                                    required: state.formData.phone ? false : true,
                                    message:
                                        'Enter your mobile number',
                                },
                            ]}>
                            <Input
                                className="form-control-modified"
                                size="large"
                                type="text"

                                defaultValue={state.formData.phone}
                                placeholder="Mobile Number"
                                onChange={(e) => { onChangeState(e, "input", "phone") }}
                            />
                        </Form.Item>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <div className={classes.formItem}>
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: state.formData.firstName ? false : true,
                                    message: 'Enter your first name!',
                                },
                            ]}>
                            <Input
                                defaultValue={state.formData.firstName}
                                size="large"
                                className="form-control-modified"
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => { onChangeState(e, "input", "firstName") }}

                            />
                        </Form.Item>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <div className={classes.formItem}>
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: state.formData.lastName ? false : true,
                                    message: 'Enter your last name!',
                                },
                            ]}>
                            <Input
                                defaultValue={state.formData.lastName}
                                size="large"
                                className="form-control-modified"
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => { onChangeState(e, "input", "lastName") }}

                            />
                        </Form.Item>
                    </div>
                </Grid>


                <Grid item xs={12} sm={6}>
                    <div className={classes.formItem}>
                        <Form.Item
                            name="companyName"
                            rules={[
                                {
                                    required: state.formData.companyName ? false : true,
                                    message:
                                        'Enter Company Name',
                                },
                            ]}>
                            <Input
                                className="form-control-modified"
                                type="text"
                                size="large"
                                defaultValue={state.formData.companyName}
                                placeholder="Company Name"
                                onChange={(e) => { onChangeState(e, "input", "companyName") }}
                            />
                        </Form.Item>

                    </div>
                </Grid>



                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.formItem}>

                        <Form.Item name='Province' rules={[{
                            required: state.formData.streetAddress1 ? false : true,
                        }]}>
                            <Select
                                size="large"
                                className="form-control-modified"
                                placeholder="Province" defaultValue={state.formData.streetAddress1} onChange={(e) => { onChangeState(e, "select", "streetAddress1") }}>
                                {provinces.map(province => <Select.Option key={province} value={province}>{province}</Select.Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                </Grid>
                {/* </div> */}
                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.formItem}>
                        <Form.Item name='District' rules={[
                            {
                                required: state.formData.streetAddress2 ? false : true,
                            },
                        ]}>
                            <Select size="large" placeholder="District" defaultValue={state.formData.streetAddress2} onChange={(e) => onChangeState(e, "select", "streetAddress2")}>
                                {/* {
                                    console.log("this provinceState", state.formData.provinceState)
                                } */}
                                {state.formData.streetAddress1 ? provinces_districts[state.formData.streetAddress1].map(
                                    district =>
                                        <Select.Option key={district} value={district} >{district}</Select.Option>) :
                                    <Select.Option >Select Province First</Select.Option>
                                }
                            </Select>
                        </Form.Item>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <div className={classes.formItem}>
                        <Form.Item name='Address' rules={[
                            {
                                required: state.formData.city ? false : true,
                            },
                        ]} >
                            <Select size="large" placeholder="Address" defaultValue={state.formData.city} onChange={(e) => { onChangeState(e, "select", "city") }}  >
                                {state.formData.streetAddress2 ? districts_places[state.formData.streetAddress2].map(
                                    place =>
                                        <Select.Option key={place.city} value={place.city}>{place.city}</Select.Option>) :
                                    <Select.Option >Select District First</Select.Option>
                                }
                            </Select>
                        </Form.Item>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.formItem}>
                        <Form.Item
                            name="panVatNumber"
                            rules={[
                                {
                                    required: state.formData.pan ? false : true,
                                    message:
                                        'Enter PAN or VAT',
                                },
                            ]}>
                            <Input
                                className="form-control-modified"
                                size="large"
                                type="text"
                                defaultValue={state.formData.countryArea}
                                placeholder="PAN/ VAT Number"
                                onChange={(e) => { onChangeState(e, "input", "countryArea") }}
                            />
                        </Form.Item>

                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.formItem}>
                        <Form.Item
                            name="landmark"
                            rules={[
                                {
                                    required: state.formData.cityArea ? false : true,
                                    message: 'Enter nearest landmark!',
                                },
                            ]}>
                            <Input onChange={(e) => { onChangeState(e, "input", "cityArea") }}
                                className="form-control-modified"
                                type="text"
                                defaultValue={state.formData.cityArea}
                                size="large"
                                placeholder="Nearest Landmark"
                            />
                        </Form.Item>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <div className={classes.formItem}>
                        <Form.Item
                            name="postalCode"
                            rules={[
                                {
                                    required: state.formData.postalCode ? false : true,
                                    message: 'Enter a postal number!',
                                },
                            ]}>
                            <Input
                                onChange={(e) => { onChangeState(e, "input", "postalCode") }}
                                className="form-control-modified"
                                type="postalCode"
                                defaultValue={state.formData.postalCode}
                                size="large"
                                placeholder="Postal Code"
                            // addonBefore="Postal Code"
                            />
                        </Form.Item>
                    </div>
                </Grid>
            </Grid>

            {/* <button className="ps-btn ps-btn--checkout" onClick={() => dispatch(action.saveShippingAddress(state.formData, state.saveAdd))} >Save Addresss</button> */}
            <div style={{ display: 'flex', direction: 'column', justifyContent: 'flex-end' }}>
                <CustomButton style={{ marginRight: '20px', width: '180px' }} title={'Cancel'} onClick={props.close} primary={false} />
                <CustomButton style={{ width: '180px' }} title={state.buttonText} primary={true} onClick={handleLoginSubmit}/>

            </div>

        </Form>
    );

}

const useStyles = makeStyles({
    formItem: {
        margin: '0px 10px'
    },
});


export default FormEditShippingAddress;
