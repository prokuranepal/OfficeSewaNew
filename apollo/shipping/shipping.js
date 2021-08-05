import { gql, fragment } from '@apollo/client';
import {ADDRESS_FIELDS} from '../auth/auth';
/**
 * create a new address for the user
 * 
 * @param - User ID and address fields

        
 * @returns - Returns the ID of the address
 */

export const CREATE_ADDRESS = gql`${ADDRESS_FIELDS}
mutation accountAddressCreate($type: AddressTypeEnum, $input: AddressInput!){
    accountAddressCreate(
      type: $type
      input: $input
    ) {
      address {
          id
      }
      user {
        addresses {
          ...AddressFields
        }
        defaultShippingAddress{
          ...AddressFields
        }
        defaultBillingAddress {
          ...AddressFields
        }
      }
      accountErrors {
          field
          message
          code
      }
    }
  }`;


    /**
 * delete a unique address of the user
 * 
 * @param - address Id 
 * @returns - nothing
 */

export const DELETE_ADDRESS= gql`${ADDRESS_FIELDS}
mutation deleteAddress($id: ID!){
    accountAddressDelete(
      id: $id
    ) {
      user {
        addresses {
          ...AddressFields
        }
        defaultShippingAddress{
          ...AddressFields
        }
        defaultBillingAddress {
          ...AddressFields
        }
      }
      accountErrors {
          message
          field
      }
    }
  }`;



/**
 * update the address of the user
 * 
 * @param - address id and address fields
 * @returns - nothing
 */

export const UPDATE_ADDRESS= gql`${ADDRESS_FIELDS}
mutation addressUpdate($id: ID!, $input: AddressInput!){
    accountAddressUpdate(
      id: $id,
      input: $input
    ) {
      user {
        addresses {
          ...AddressFields
        }
        defaultShippingAddress{
          ...AddressFields
        }
        defaultBillingAddress {
          ...AddressFields
        }
      }
      accountErrors {
          message
          field
      }
    }
  }`;

  /**
 * set the default shipping or billing address of the user
 * 
 * @param - address id and type of address - BILLING  and SHiPPING

        
 * @returns - nothing
 */

export const SET_DEFAULT_ADDRESS= gql`${ADDRESS_FIELDS}
mutation addressSetDefault($addressId: ID!, $type: AddressTypeEnum!){
    accountSetDefaultAddress(
        id: $addressId,
        type: $type,
    ) {
      user {
        addresses {
          ...AddressFields
        }
        defaultShippingAddress{
          ...AddressFields
        }
        defaultBillingAddress {
          ...AddressFields
        }
      }
      accountErrors {
          message
          field
      }
    }
  }`;