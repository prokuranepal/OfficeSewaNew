import { notification } from 'antd';
import storage from 'redux-persist/lib/storage';

export const actionTypes = {
    SET_ADDRESSES: 'SET_ADDRESSES',
    SET_DEFAULT_SHIPPING_ADDRESS: 'SET_DEFAULT_SHIPPING_ADDRESS',
    SET_DEFAULT_BILLING_ADDRESS: 'SET_DEFAULT_BILLING_ADDRESS',
    PAYMENT_COMPLETE: 'PAYMENT_COMPLETE',
    CHECOUT_COMPLETE: 'CHECOUT_COMPLETE'
};

const modalNotification = (type, message, data) => {
    notification[type]({
        message: message,
        description: data,
    });
};

export const setAddresses = (data) => dispatch => {

    let addresses = [];
    // console.log(data)
    if (data && data.user && data.user.addresses.length !== 0) {
        addresses = data.user.addresses;
        if (data.user.defaultShippingAddress) {
            dispatch(setDefaultShippingAddress(data.user.defaultShippingAddress))
        }
        if (data.user.defaultBillingAddress) {
            dispatch(setDefaultBillingAddress(data.user.defaultBillingAddress))
        }
    }
    dispatch(setAddressesSuccess(addresses));
    
}

export const setDefaultShippingAddress = (address) => {
    return {
        address: address,
        type: actionTypes.SET_DEFAULT_SHIPPING_ADDRESS
    }
}

export const setDefaultBillingAddress = (address) => {
    return {
        address: address,
        type: actionTypes.SET_DEFAULT_BILLING_ADDRESS
    }
}

export const setAddressesSuccess = (addresses) => {
    return {
        addresses: addresses,
        type: actionTypes.SET_ADDRESSES
    }
}

export const paymentComplete = (payment) => {
    return {
        payment: payment,
        type: actionTypes.PAYMENT_COMPLETE
    }
}

export const checoutComplete = (checout) => {
    modalNotification("success", "Success","Payment and Checout Successful")
    return {
        checout: checout,
        type: actionTypes.CHECOUT_COMPLETE
    }
}