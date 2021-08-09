import React, { useState, useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Modal } from 'antd';
// import Modal from '@material-ui/core/Modal';

import LinkButton from '../../elements/LinkButton';
import ShippingInfo from './modules/ShippingInfo';
import { colors } from '../../../theme/colors';
import { fontSize } from '../../../theme/font';
import CustomButton from '../../elements/CustomButton';
import AddressTable from './modules/AddressTable';
import FormEditAddress from './modules/FormEditAddress';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { addressess } from '../../../data/data';

const Shipping = (props) => {

    const rootRef = React.useRef(null);
    const [openModal, setOpenModal] = useState(false);
    const [showAddress, setShowAddress] = useState(true);
    // const [setDefaultAddress, { data }] = useMutation(SET_DEFAULT_ADDRESS)
    // const [createCheckout, checkoutData] = useMutation(CREATE_CHECKOUT);
    const [shippingAddress, setShippingAddress] = useState(null)
    const [billingAddress, setBillingAddress] = useState(null)
    // const shippingAddress = useSelector(state => state.shipping.defaultShippingAddress);
    // const billingAddress = useSelector(state => state.shipping.defaultBillingAddress);
    // const cartItems = useSelector(({ cart }) => cart.cartItems)
    const [type, setType] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [editableAddress, setEditableAddress] = useState(null);
    // const dispatch = useDispatch();

    const classes = useStyles();
    const theme = useTheme();

    const handleHideModal = () => {
        setOpenModal(false);
        setShowAddress(true);
    };

    const openBillingAddressTable = () => {
        setOpenModal(true);
        setType("BILLING");
    }

    const openShipppingAddressTable = () => {
        setType("SHIPPING");
        setOpenModal(true);
    }

    const selectAddress = (address) => {
        setSelectedAddress(address);
    }

    const setDefault = () => {
        if (selectedAddress) {
            // setDefaultAddress({ variables: { addressId: selectedAddress.id, type: type } });
            // setType(null);
            setShowAddress(true);
            setOpenModal(false);
        }

    }

    const onCancel = () => {
        setShowAddress(true);
        setOpenModal(false);
    }

    // useEffect(() => {
    //     if (data && data.accountSetDefaultAddress) {
    //         dispatch(actions.setAddresses(data.accountSetDefaultAddress));
    //     }
    // }, [data])

    useEffect(() => {
        setShippingAddress(addressess.items[1]);
        setBillingAddress(addressess.items[0])
    }, [])

    const editAddress = (data) => {
        console.log(data);
        setEditableAddress(data);
        setShowAddress(false);
    }

    const functionAddAddress = () => {
        setShowAddress(false)
        setEditableAddress(null);
    }

    // const continueToPayment = () => {
    //     // console.log(cartItems);
    //     const sa = { ...shippingAddress, country: "NP" };
    //     delete sa.__typename; delete sa.isDefaultShippingAddress; delete sa.isDefaultBillingAddress; delete sa.id;
    //     const ba = { ...billingAddress, country: "NP" };
    //     delete ba.__typename; delete ba.isDefaultShippingAddress; delete ba.isDefaultBillingAddress; delete ba.id;
    //     const ci = [];
    //     cartItems.map(item => ci.push({ variantId: item.variants[0].id, quantity: item.quantity }));
    //     console.log(cartItems);
    //     console.log(ba);
    //     console.log(ci);
    //     createCheckout({ variables: { email: "", shippingAddress: sa, billingAddress: ba, lines: ci } })
    //     // Router.push("/account/payment");
    // }

    // useEffect(() => {
    //     if (checkoutData.data && checkoutData.data.checkoutCreate) {
    //         const cc = checkoutData.data.checkoutCreate
    //         console.log(cc.created, cc.checkoutErrors, cc.checkout);
    //         if (cc.created === null || cc.checkout === null) {
    //             dispatch(cartActions.checkoutError(cc.checkoutErrors));
    //         } else {
    //             dispatch(cartActions.saveCheckout(cc.checkout));
    //             Router.push('/account/payment');
    //         }

    //     }
    // }, [checkoutData])

    return (
        <div ref={rootRef}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <div className={classes.shippingContainer}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.header}>Shipping Address</div>
                                {shippingAddress ? <ShippingInfo address={shippingAddress} /> :
                                    <p className={classes.address}>No Shipping Address Found</p>}
                                <LinkButton title={shippingAddress?'Change Address':'Add Address'} onClick={() => openShipppingAddressTable()} />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.header}>Billing Address</div>
                                {billingAddress ? <ShippingInfo address={billingAddress} /> :
                                    <p className={classes.address}>No Billing Address Found</p>}
                                <LinkButton title={billingAddress?'Change Address':'Add Address'} onClick={() => openBillingAddressTable()} />
                            </Grid>

                        </Grid>
                    </div>
                    <div className={classes.feeContainer}>
                        <span>Shipping Fee</span>
                        <span className={classes.shippingFee}>NRs 50</span>
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.summaryContainer}>
                        <div className={classes.summary}>
                            <div className={classes.summaryHeader}>Checout Summary</div>
                            <Divider />
                            <div className={classes.cost}>
                                <div className={classes.list}>
                                    <p>Sub Total</p>
                                    <p>NRs 1000</p>
                                </div>
                                <div className={classes.list}>
                                    <p>Delivery Fee</p>
                                    <p>NRs 50</p>
                                </div>
                            </div>
                            <Divider />
                            <div className={classes.totalContainer}>
                                <p className={classes.totalText}>Total</p>
                                <p className={classes.totalAmount}>NRs 1050</p>
                            </div>
                        </div>
                        <div className={classes.buttonContainer}>
                            <CustomButton title={'Proceed To Checkout'} style={{ width: '100%' }} url={'/checkout'} />
                        </div>
                    </div>
                </Grid>
            </Grid>
            
            <Modal
                centered
                footer={null}
                width={900}
                // style={{ overflow: 'scroll' }}
                className={classes.modal}
                onCancel={(e) => handleHideModal(e)}
                visible={openModal}>
                {/* <Fade in={openModal}> */}
                    <div className={classes.modalContainer}>
                        <h3 className={classes.modalHeader}>{type + " " + "ADDRESS"}</h3>
                        {showAddress ? <div >
                            <div style={{ marginBottom: '20px', marginLeft: '10px' }}>
                                <LinkButton title={'Add New Address'} onClick={functionAddAddress} icon={<AddCircleOutlineIcon />} />
                            </div>
                            <AddressTable type={type} editAddress={editAddress}
                                selectRow={(row) => selectAddress(row)}
                                switchToAddAddress={() => setShowAddress(false)} />
                            
                            {type === null ? null : <div className={classes.modalButtonContainer}>
                                <CustomButton primary={false} onClick={onCancel} style={{ color: "white", width: '150px', marginRight: '20px' }} title={'Cancel'} />
                                <CustomButton primary={true} onClick={setDefault} style={{ color: "white", width: '150px' }} title={'Save'} /></div>}

                        </div>
                         
                            : <FormEditAddress data={editableAddress} close={() => setShowAddress(true)} />}
                    </div> 
                {/* </Fade>  */}
            </Modal>
        </div >
    )
};

const useStyles = makeStyles(theme => ({
    shippingContainer: {
        marginLeft: '60px',
        border: 'solid 1px #aaa',
        padding: '20px 30px',
        // [theme.breakpoints.down('md')]: {
        //     marginRight: '60px',
        //   },
    },
    feeContainer: {
        marginTop: '30px',
        marginLeft: '60px',
        border: 'solid 1px #aaa',
        padding: '15px 30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Work-Sans'
    },
    header: {
        color: colors.dark,
        fontSize: fontSize.secondaryHeader,
        fontWeight: 'bold',
        fontFamily: 'Work-Sans',
        padding: '20px 0px'
    },
    address: {
        fontSize: '14px'
    },
    shippingFee: {
        color: colors.dark,
        fontSize: fontSize.secondaryHeader,
        fontWeight: 'bold',
        fontFamily: 'Work-Sans'
    },
    summaryContainer: {
        marginRight: '60px',
        marginLeft: '60px'
    },
    summaryHeader: {
        color: colors.dark,
        fontSize: fontSize.secondaryHeader,
        fontWeight: 'bold',
        fontFamily: 'Work-Sans',
        padding: '20px 10px'
    },
    summary: {
        padding: '10px'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cost: {
        padding: '20px 10px 10px'
    },
    totalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px 10px'
    },
    totalText: {
        color: colors.dark,
        fontSize: '18px',
        fontWeight: 'bold'
    },
    totalAmount: {
        color: colors.secondary,
        fontSize: '18px',
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginBottom: '20px'
    },
    modalHeader: {
        color: colors.primary,
        marginBottom: '20px',
        marginLeft: '10px'
    },
    modalButtonContainer: {
        display: 'flex',
        direction: 'column',
        justifyContent: 'flex-end',
        marginTop: '20px'
    },
    modal: {
        display: 'flex',
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'white'
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: '20px',
        maxWidth: '800px'
    }
}));

export default Shipping;