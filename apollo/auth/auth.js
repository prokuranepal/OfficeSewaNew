import { gql } from '@apollo/client';

export const ADDRESS_FIELDS = gql`
  fragment AddressFields on Address {
    id
  firstName
  lastName
  companyName
  streetAddress1
  streetAddress2
  city
  cityArea
  country {
      country
  }
  countryArea
  postalCode
  phone
  isDefaultShippingAddress
  isDefaultBillingAddress
  }
`;
/**
 * Mutation to register a new user in the saleor platform without email verification
 * 
 * @param - Email and Password, both in String fromat
 * @returns - Errors if the user is already registered with the given email/phone number or user with email and isActive for successful registration
 */
export const ACCOUNT_REGISTER = gql`
mutation register($email: String!, $password: String!){
    accountRegister(
        input: { email: $email, password: $password }
    ) {
        accountErrors {
            field
            code
            message
        }
        user {
            email
            isActive
        }
    }
  }
`;

/**
 * Mutation to register a new user in the saleor platform with email verification
 * 
 * @param - Email and Password, both in String fromat
 * @returns - Errors if the user is already registered with the given email/phone number or
 *  user with email and isActive for successful registration with a redirect url to confirm verification
 */

export const ACCOUNT_REGISTER_WITH_EMAIL = gql`
mutation registerWithEmail($email: String!, $password: String!){
    accountRegister(
        input: {
          email: $email
          password: $password
          redirectUrl: "http://localhost:3005/account/email-verify"
        }
      ) {
        accountErrors {
          field
          code
          message
        }
        user {
          email
          isActive
          id
        }
      }
  }
`;

/**
 * Mutation to register a new user in the saleor platform
 * 
 * @param - Email and token received from the redirected url
 * @returns - successful regitration and login
 */


export const ACCOUNT_CONFIRM = gql`
mutation confirmAccount($email: String!, $token: String!){
    confirmAccount(
        email: $email
        token: $token
      ) {
        accountErrors {
          field
          code
        }
        user {
          email
          id
          isActive
        }
      }
  }
`;

/**
 * Mutation to login an existing user in the saleor platform
 * 
 * @param - Email and Password, both in String fromat
 * @returns - token, refresh token, csrf token and errors if any
 */

export const LOGIN = gql`${ADDRESS_FIELDS}
mutation login($email: String!, $password: String!){
    tokenCreate(email: $email, password: $password) {
        token
        refreshToken
        csrfToken
        user {
          email
          id
          orders(first:5){
            edges {
              node {
                shippingPrice {
                  net {
                    amount
                  }
                }
                subtotal {
                  net {
                    amount
                  }
                }
                total {
                  net {
                    amount
                  }
                }
                statusDisplay
                trackingClientId
                id
                created
                shippingAddress{
                  ...AddressFields
                }
                billingAddress {
                  ...AddressFields
                }
                lines {
                  id
                  productName
                  quantity
                  unitPrice {
                    net {
                      amount
                    }
                  }
                  totalPrice{
                    net {
                      amount
                    }
                  }
                  thumbnail {
                    url
                    alt
                  }
                }
              }
            }
          }
          addresses {
            ...AddressFields
          }
          defaultShippingAddress {
            ...AddressFields
          }
          defaultBillingAddress {
            ...AddressFields
          }
          metadata {
            key
            value
          }
        }
        errors {
          field
          message
        }
      }
  }
`;

/**
 * Mutation to verify the token sent by the server when logged in
 * 
 * @param - token
 * @returns - boolean whether the token is valid or not
 */


export const TOKEN_VERIFY = gql`
mutation tokenVerify($token: String!){
    tokenVerify(token: $token) {
        isValid
        accountErrors {
          field
          code
        }
      }
  }
`;

/**
 * Mutation to get the new token with csrf refresh token
 * 
 * @param - csrf token
 * @returns - new token
 */

export const TOKEN_REFRESH_CSRF = gql`
mutation tokenRefreshCsrf($csrfToken: String!){
    tokenRefresh(csrfToken: $csrfToken) {
        token
        accountErrors {
          code
        }
      }
  }
`;

/**
 * Mutation to get the new token using refresh token
 * 
 * @param - refresh token
 * @returns - new token
 */

export const TOKEN_REFRESH_REFRESH = gql`
mutation tokenRefreshCsrf($refreshToken: String!){
    tokenRefresh(refreshToken: $refreshToken) {
        token
        accountErrors {
          code
        }
      }
  }
`;

/**
 * Mutation to deactivate all existing tokens
 * 
 * @param - No Param
 * @returns - Errors if any
 */

export const TOKEN_DEACTIVATE_ALL = gql`
mutation tokenRefreshCsrf{
    tokensDeactivateAll {
        accountErrors {
          field
          message
          code
        }
      }
  }
`;

/**
 * Mutation to request a password reset
 * 
 * @param - Email with a redirect url for password change
 * @returns - errors if any
 */

export const PASSWORD_RESET_REQUEST = gql`
mutation requestPasswordReset($email: String!){
    requestPasswordReset(
        email: $email
        redirectUrl: "http://localhost:3005/account/reset-password"
      ) {
        accountErrors {
          field
          code
          message
        }
      }
      
  }
`;

/**
 * Mutation to set the new password in the redirected url
 * 
 * @param - Token, email and new password
 * @returns - errors if any
 */

export const SET_PASSWORD = gql`
mutation setPassword($email: String!, $token: String!, $password: String!){
    setPassword(
        token: $token
        email: $email
        password: $password
      ) {
        accountErrors {
          field
          code
        }
      }
  }
`;

/**
 * Mutation to request a password change
 * 
 * @param - Old and New password
 * @returns - Errors if any
 */

export const CHANGE_PASSWORD = gql`
mutation passwordChange($oldPassword: String!, $newPassword: String!){
    passwordChange(oldPassword: $oldPassword, newPassword: $newPassword) {
        accountErrors {
          field
          code
        }
      }
  }
`;

/**
 * Mutation to request a password change
 * 
 * @param - Old and New password
 * @returns - Errors if any
 */

export const UPDATE_USER_INFORMATION = gql`
mutation updateMetadata($id: ID!, $input: [MetadataInput!]!){
  updateMetadata(id: $id, input: $input) {
    metadataErrors {
      field
      code
    }
    item {
      metadata {
        key
        value
      }
    }


      }
  }
`;
