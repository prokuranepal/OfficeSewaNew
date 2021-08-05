import { gql, fragment } from '@apollo/client';


/**
 * Create a new checkout
 * 
 * @param - shippingAddress: {
                firstName: "John"
                lastName: "Doe"
                streetAddress1: "1470  Pinewood Avenue"
                city: "Michigan"
                postalCode: "49855"
                country: US
                countryArea: "MI"
            },
            billingAddress: {
                firstName: "John"
                lastName: "Doe"
                streetAddress1: "1470  Pinewood Avenue"
                city: "Michigan"
                postalCode: "49855"
                country: US
                countryArea: "MI"
            }

        
 * @returns - Returns total price, shipping and payment methods
 */

export const CREATE_CHECKOUT = gql`
mutation checkoutCreate($email: String, $lines: [CheckoutLineInput]!, $shippingAddress: AddressInput!, $billingAddress: AddressInput!){
    checkoutCreate(
      input: {
        email: $email,
        lines: $lines,
        shippingAddress: $shippingAddress,
        billingAddress: $billingAddress
      }
    ) {
      created
      checkout {
        id
        totalPrice {
          gross {
            amount
            currency
          }
        }
        isShippingRequired
        availableShippingMethods {
          id
          name
        }
        availablePaymentGateways {
          id
          name
          config {
            field
            value
          }
        }
      }
      checkoutErrors {
        field
        code
      }
    }
  }`;


/**
 * update the shipping method
 * 
 * @param - Checkout ID and Shipping Method ID

        
 * @returns - Returns the shipping method and total price
 */

export const UPDATE_CHECKOUT_SHIPPING_METHOD = gql`
mutation checkoutShippingMethodUpdate($checkoutId: ID!, $shippingMethodId: ID!){
    checkoutShippingMethodUpdate(
      checkoutId: $checkoutId
      shippingMethodId: $shippingMethodId
    ) {
      checkout {
        id
        shippingMethod {
          name
        }
        totalPrice {
          gross {
            amount
            currency
          }
        }
      }
      checkoutErrors {
        field
        message
      }
    }
  }`;

  /**
 * choose the payment gateway
 * 
 * @param - Checkout ID, payment gateway, token and amount

        
 * @returns - payment id and charge status
 */

export const CREATE_CHECKOUT_PAYMENT = gql`
  mutation checkoutPaymentCreate($checkoutId: ID!, $gateway: String!, $token: String!, $amount: PositiveDecimal){
    checkoutPaymentCreate(
      checkoutId: $checkoutId
      input: {
        gateway: $gateway
        token: $token
        amount: $amount
      }
    ) {
      payment {
        id
        chargeStatus
      }
      paymentErrors {
        field
        message
      }
    }
  }`;

export const COMPLETE_CHECKOUT = gql`
mutation checkoutComplete($checkoutId: ID!, $paymentData: JSONString){
    checkoutComplete(
      checkoutId: $checkoutId,
      paymentData: $paymentData
    ) {
      order {
        id
        status
      }
      confirmationNeeded 
      confirmationData
      checkoutErrors {
        field
        message
      }
    }
  }`;