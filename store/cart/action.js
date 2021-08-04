import {notification } from 'antd';

export const actionTypes = {
    GET_CART: 'GET_CART',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_ERROR: 'GET_CART_ERROR',

    GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
    GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',

    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',

    CLEAR_CART: 'CLEAR_CART',
    CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
    CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',

    INCREASE_QTY: 'INCREASE_QTY',
    INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
    INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',

    DECREASE_QTY: 'DECREASE_QTY',
    UPDATE_CART: 'UPDATE_CART',

    UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
    UPDATE_CART_ERROR: 'UPDATE_CART_ERROR',

    ADD_SHIPPING_ADDRESS: 'ADD_SHIPPING_ADDRESS',
    UPDATE_SHIPPING_ADDRESS: 'UPDATE_SHIPPING_ADDRESS',
    UPDATE_SHIPADD_FROM_LOCALSTORAGE: "UPDATE_SHIPADD_FROM_LOCALSTORAGE",

    SAVE_CHECKOUT_ID: 'SAVE_CHECKOUT_ID',

    CHECKOUT_ERROR: 'CHECKOUT_ERROR'
};

const modalNotification = (type, message, data) => {
    notification[type]({
        message: message,
        description: data,
    });
};


export function getCart() {
    return { type: actionTypes.GET_CART };
}

export function saveCheckout(data) {
    return {
        type: actionTypes.SAVE_CHECKOUT_ID,
        checkoutId: data.id,
        shippingMethods: data.availableShippingMethods,
        paymentMethods: data.availablePaymentGateways,
        amount: data.totalPrice.gross.amount
    }
}

export function checkoutError(error) {
    modalNotification("error", error[0].code,"")
    return {
        type: actionTypes.CHECKOUT_ERROR,
    }
}

export function getCartSuccess() {
    return {
        type: actionTypes.GET_CART_SUCCESS,
    };
}

export function getCartError(error) {
    return {
        type: actionTypes.GET_CART_ERROR,
        error,
    };
}

export function addItem(product) {
    console.log("item added to redux")
    return { type: actionTypes.ADD_ITEM, product };
}

export function saveShippingAddress(address,saveAdd) {
    console.log("address added to redux")
    return { type: actionTypes.ADD_SHIPPING_ADDRESS, address, saveAdd};
}


export function removeItem(product) {
    return { type: actionTypes.REMOVE_ITEM, product };
}

export function increaseItemQty(product) {
    return { type: actionTypes.INCREASE_QTY, product };
}

export function decreaseItemQty(product) {
    return { type: actionTypes.DECREASE_QTY, product };
}

export function updateCartSuccess(payload) {
    return {
        type: actionTypes.UPDATE_CART_SUCCESS,
        payload,
    };
}

export function clearCart() {
    return {
        type: actionTypes.CLEAR_CART
    }
}

export function updateShippingAddress(payload) {
    console.log("shipping store",payload)
    return {
        type: actionTypes.UPDATE_SHIPPING_ADDRESS,
        payload,
    };
}

export function updateCartError(payload) {
    return {
        type: actionTypes.UPDATE_CART_ERROR,
        payload,
    };
}

export function updateShippingAddressFromLocalStorage(){
    return {
        type: actionTypes.UPDATE_SHIPADD_FROM_LOCALSTORAGE
    }
}
