import { actionTypes, emailVerificationSuccess} from './action';
import { updateObject } from '../utility';

export const initialState = {
    isLoggedIn: false,
    token: null,
    refreshToken: null,
    csrfToken: null,
    error: null,
    userId: null,
    user: null,
    email: null,
    orders: null,
    registerError: null
};

const loginSuccess = (state, action) => {
    return updateObject(state, {
        isLoggedIn: true,
        token: action.token,
        refreshToken: action.refreshToken,
        csrfToken: action.csrfToken,
        userId: action.userId,
        error: null,
        user: action.user,
        email: action.email,
        orders: action.orders
    });
}

const logoutSuccess = (state, action) => {
    return updateObject(state, {
        isLoggedIn: false,
        token: null,
        refreshToken: null,
        csrfToken: null,
        error: null
    });
}

const loginFail = (state, action) => {
    return updateObject(state, {
        error: action.error
    })
}

const registerFail = (state, action) => {
    return updateObject(state, {
        registerError: action.registerError
    })
}

const emailSentForRegistration = (state, action) => {
    return updateObject(state, {
        registerError: null
    })
}

const updateUserData = (state, action) => {
    // console.log(action)
    return updateObject(state, {
        user: action.user
    })
}

const clearErrors = (state, action) => {
    return updateObject(state, {
        error: null,
        registerError: null
    })
}



const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGOUT_SUCCESS: return logoutSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.UPDATE_USER_DATA: return updateUserData(state, action);
        case actionTypes.EMAIL_SENT_FOR_REGISTRATION_FAIL: return registerFail(state,action);
        case actionTypes.EMAIL_SENT_FOR_REGISTRATION_SUCCESS: return emailSentForRegistration(state, action);
        // case actionTypes.EMAIL_VERIFICATION_SUCCESSFUL: return emailVerificationSuccess(action, state)
        case actionTypes.CLEAR_ERRORS: return clearErrors(state,action);
        default:
            return state;
    }
};

export default reducer;
