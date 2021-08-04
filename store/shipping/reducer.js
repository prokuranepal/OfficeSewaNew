import { actionTypes} from './action';
import { updateObject } from '../utility';

export const initialState = {
    addresses: [],
    defaultShippingAddress: null,
    defaultBillingAddress: null
};

const setAddresses = (state, action) => {
    return updateObject(state, {addresses: action.addresses});
}

const setDefaultShippingAddress = (state, action) => {
    return updateObject(state, {defaultShippingAddress: action.address});
}

const setDefaultBillingAddress = (state, action) => {
    return updateObject(state,{ defaultBillingAddress: action.address});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_ADDRESSES:
            return setAddresses(state, action);
            
        case actionTypes.SET_DEFAULT_SHIPPING_ADDRESS:
            return setDefaultShippingAddress(state, action);
            
        case actionTypes.SET_DEFAULT_BILLING_ADDRESS:
            return setDefaultBillingAddress(state, action);
            
        default:
            return state;
    }
};

export default reducer;