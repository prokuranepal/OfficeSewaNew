import {notification } from 'antd';
import storage from 'redux-persist/lib/storage';
// import base64 from "base-64";
// import utf8 from "utf8";

export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    LOGIN_FAIL: 'LOGIN_FAIL',
    CHANGE_PASSWORD_SUCCESS : 'CHANGE_PASSWORD_SUCCESS',
    CHANGE_PASSWORD_FAIL: 'CHANGE_PASSWORD_FAIL',
    EMAIL_SENT_FOR_PASSWORD_RESET_SUCCESS: 'EMAIL_SENT_FOR_PASSWORD_RESET_SUCCESS',
    EMAIL_SENT_FOR_PASSWORD_RESET_FAIL: 'EMAIL_SENT_FOR_PASSWORD_RESET_FAIL',
    EMAIL_SENT_FOR_REGISTRATION_SUCCESS: 'EMAIL_SENT_FOR_REGISTRATION_SUCCESS',
    EMAIL_SENT_FOR_REGISTRATION_FAIL: 'EMAIL_SENT_FOR_REGISTRATION_FAIL',
    UPDATE_USER_DATA: 'UPDATE_USER_DATA',
    EMAIL_VERIFICATION_SUCCESSFUL: 'EMAIL_VERIFICATION_SUCCESSFUL',
    CLEAR_ERRORS: 'CLEAR_ERRORS'
};

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';
export const AUTHENTICATE = 'AUTHENTICATE';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

const modalNotification = (type, message, data) => {
    notification[type]({
        message: message,
        description: data,
    });
};

export function login() {
    return { type: actionTypes.LOGIN_REQUEST };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    storage.removeItem('persist:root')
    return { type: actionTypes.LOGOUT_SUCCESS };
}

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_REQUEST
    };
};

export const loginSuccess = (data) => {
    console.log(data)
    // const encoded = data.tokenCreate.token.split(".");
    // let tokenDecoded = base64.decode(encoded[1]);
    // tokenDecoded = utf8.decode(tokenDecoded);
    // tokenDecoded = JSON.parse(tokenDecoded, null, 2);
    // const expirationTime = tokenDecoded.exp - tokenDecoded.iat;
    // console.log(expirationTime);
    let userData = {}
    const user = data.tokenCreate.user.metadata;
    for(let i=0;i< user.length; i++) {
        userData = {...userData, [user[i].key]:user[i].value}
    }
    // console.log("action",userData);
    // console.log(data.tokenCreate.user.orders);
    modalNotification("success", "Logged In Successfully","")
    localStorage.setItem('token', data.tokenCreate.token);
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: data.tokenCreate.token,
        refreshToken: data.tokenCreate.refreshToken,
        csrfToken: data.tokenCreate.csrfToken,
        email: data.tokenCreate.user.email,
        userId: data.tokenCreate.user.id,
        user: userData,
        orders: data.tokenCreate.user.orders.edges
    };
};


export const loginFail = (data) => {
    // console.log("LOGIN Fail",data);
    modalNotification("error", "Authentication Failed",data.tokenCreate.errors[0].message)

    return {
        type: actionTypes.LOGIN_FAIL,
        error: data.tokenCreate.errors[0].message
    };
};

export const passwordChangeSuccess = () => {
    modalNotification("success", "Password Changed Successfully","")
    return {
        type: actionTypes.CHANGE_PASSWORD_SUCCESS
    }
}

export const passwordChangeFail = () => {
    modalNotification("error", "Password Change Failed","Invalid Credentials")
    return {
        type: actionTypes.CHANGE_PASSWORD_FAIL
    }
}

export const passwordResetEmailSentSuccess = () => {
    modalNotification("success", "Email Sent",`An email has been sent. Check your inbox to confirm`);
    return {
        type: actionTypes.EMAIL_SENT_FOR_PASSWORD_RESET_SUCCESS
    }
}

export const passwordResetEmailSentFail = (data) => {
    modalNotification("error", "Error", data.requestPasswordReset.accountErrors[0].message);
    return {
        type: actionTypes.EMAIL_SENT_FOR_PASSWORD_RESET_FAIL
    }
}

export const registrationEmailSentSuccess = () => {
    modalNotification("success", "Email Sent",`An email has been sent for verification. Check your inbox to confirm`);
    return {
        type: actionTypes.EMAIL_SENT_FOR_REGISTRATION_SUCCESS
    }
}

export const registrationEmailSentFail = (data) => {
    modalNotification("error", "Registration Failed","This email is already used");
    return {
        type: actionTypes.EMAIL_SENT_FOR_REGISTRATION_FAIL,
        registerError: data.accountRegister.accountErrors[0].message
    }
}

export const emailVerificationSuccess = (data) => {
    modalNotification("success", "Email successfully verified","");
    return {
        type: actionTypes.EMAIL_VERIFICATION_SUCCESSFUL
    }
}

export const clearErrors = () => {
    return {
        type: actionTypes.CLEAR_ERRORS
    }
}

// export const authenticate = (token, userId, expiryTime) => {
//     return dispatch => {
//         // 
//         dispatch({
//             type: actionTypes.AUTHENTICATE,
//             token: token,
//             userId: userId
//         });
//         dispatch(checkAuthTimeout(expiryTime));
//     }
// }

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const updateUserData = (user) => {

    let userData = {}

    for(let i=0;i< user.length; i++) {
        userData = {...userData, [user[i].key]:user[i].value}
    }
    // console.log(userData)
    return {
        user: userData,
        type: actionTypes.UPDATE_USER_DATA
    }
}

// export const checkAuthTimeout = (expirationTime, refreshToken) => {
//     // console.log("CheckoutTime", expirationTime);
//     return dispatch => {
//         // const refresh_token = refreshToken;
//         setTimeout(() => {
//             // dispatch(logout());
//             dispatch(sendRefreshToken(refreshToken));
//         }, (expirationTime) * 1000);
//     };
// };

// const sendRefreshToken = (refreshToken) => {
//     return dispatch => {
//         // console.log("refresh token");
//         // let url = 'https://securetoken.googleapis.com/v1/token?key=AIzaSyDL3N1A50XmBEQGRPrAN2zCudp9mpIe28I';
//         let url = '/users/token';
//         const data = {
//             // grant_type: "refresh_token",
//             refreshToken: refreshToken
//         }
//         axios.post(url, data,{
//             headers: headers
//           })
//             .then(response => {
//                 // console.log(response);
//                 // response = response.authResponse;
//                 const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                
//                 localStorage.setItem('token', response.data.token);
                
//                 localStorage.setItem('userId', response.data.userId);// localStorage.setItem('token', response.data.id_token);
//                 localStorage.setItem('expirationDate', expirationDate);
//                 // localStorage.setItem('userId', response.data.user_id);
//                 // localStorage.setItem('refreshToken', response.data.refresh_token);
//                 // dispatch(authSuccess(response.data.id_token, response.data.user_id));
//                 dispatch(checkAuthTimeout(response.data.expiresIn, response.data.refreshToken));
//             }).catch(err => {
//                 dispatch(commonActions.fetchError(err.message))
//             });
//     }
// }

// export const signUp = (data) => {
//     return dispatch => {
//         const url = '/users/signup';
//         // const authData = {
//         //     fullName: fullName,
//         //     email: email,
//         //     password: password,
//         //     returnSecureToken: true
//         // };
//         // console.log(data);
//         axios.post(url, data,{
//             headers: headers
//           })
//             .then(response => {
//                 // console.log(response.data.success);
//                 dispatch(signUpSuccess(response.data.status));
//             })
//             .catch(err => {
//                 // console.log(err.response.data.err.message)
//                 // dispatch(signUpFail(err.response.data.err.message));
//                 dispatch(commonActions.fetchError(err.message))
//             });
//     }
// }

// export const signUpSuccess = (message) => {
//     return {
//         type: actionTypes.SIGNUP_SUCCESS,
//         message: message
//     }
// }

// export const signUpFail = (message) => {
//     return {
//         type: actionTypes.SIGNUP_FAIL,
//         message: message
//     }
// }

// export const signIn = (email, password) => {
//     return dispatch => {
//         dispatch(authStart());
//         const authData = {
//             email: email,
//             password: password
//         };
//         // console.log(authData);
//         // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDL3N1A50XmBEQGRPrAN2zCudp9mpIe28I';
//         // const url = './auth.js';
//         const url = '/users/login';
//         axios.post(url, authData, {
//             headers: headers
//           })
//             .then(response => {
//                 // response = response.authResponse;
//                 const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
//                 // console.log(new Date().getTime());
//                 // console.log(response.data.expiresIn, response.data.refreshToken);
//                 // console.log(response.data.idToken,response.data.expiresIn, expirationDate, expirationDate.getTime() - new Date().getTime());
//                 localStorage.setItem('token', response.data.token);
//                 localStorage.setItem('expirationDate', expirationDate);
//                 localStorage.setItem('userId', response.data.userId);
//                 // localStorage.setItem('refreshToken', response.data.refreshToken);
//                 dispatch(authSuccess(response.data.token, response.data.userId));
//                 // dispatch(checkAuthTimeout(response.data.expiresIn));
//                 dispatch(checkAuthTimeout(response.data.expiresIn, response.data.refreshToken));
//             })
//             .catch(err => {
//                 console.log(err.response,err.message);
//                 dispatch(commonActions.fetchError(err.message))
//                 // dispatch(authFail(err.response.data.err.message));
//             });
//     };
// };

// export const setAuthRedirectPath = (path) => {
//     return {
//         type: actionTypes.SET_AUTH_REDIRECT_PATH,
//         path: path
//     };
// };

// export const authCheckState = () => {
//     // console.log("authCheckState");
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             dispatch(logout());
//         } else {
//             const expirationDate = new Date(localStorage.getItem('expirationDate'));
//             if (expirationDate <= new Date()) {
//                 dispatch(logout());
//             } else {
//                 const userId = localStorage.getItem('userId');
//                 dispatch(authSuccess(token, userId));
//                 dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
//             }
//         }
//     };
// };

// export const resetPassword = (email) => {
//     console.log(email);
//     return dispatch => {
//         const data = {
//             requestType: "PASSWORD_RESET",
//             email: email
//         };
//         const url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDL3N1A50XmBEQGRPrAN2zCudp9mpIe28I';
//         axios.post(url, data)
//             .then(response => {
//                 // console.log(response);
//             }).catch(err => {
//                 console.log("Something error");
//             });
//         dispatch(sendResetPassword());
//     }
// }

// export const sendResetPassword = () => {
//     return {
//         type: actionTypes.RESET_PASSWORD
//     }
// }
