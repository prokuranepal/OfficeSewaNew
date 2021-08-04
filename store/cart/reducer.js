import {actionTypes} from './action';

export const initCart = {
  cartItems: [],
  amount: 0,
  cartTotal: 0, 
  shipping_address:{},
  checkoutId: null,
  shippingMethods: null,
  paymentMethods: null,
};

function reducer(state = initCart, action) {
  switch (action.type) {
    case actionTypes.GET_CART_SUCCESS:
      return {
        ...state
      };
    case actionTypes.UPDATE_CART_SUCCESS:
      return {
        ...state,
        ...{
          cartItems: action.payload.cartItems
        },
        ...{
          amount: action.payload.amount
        },
        ...{
          cartTotal: action.payload.cartTotal
        }
      };
    case actionTypes.SAVE_CHECKOUT_ID:
      return{
        ...state,
        ...{
          checkoutId: action.checkoutId,
          shippingMethods: action.shippingMethods,
          paymentMethods: action.paymentMethods,
          amount: action.amount
        }
      }
    case actionTypes.CLEAR_CART_SUCCESS:
      return {
        ...state,
        ...{
          cartItems: action.payload.cartItems
        },
        ...{
          amount: action.payload.amount
        },
        ...{
          cartTotal: action.payload.cartTotal
        }
      };
      case actionTypes.UPDATE_SHIPPING_ADDRESS:
          console.log("shipping store", action.payload)
          return {
            ...state,
           
              shipping_address: action.payload
            
          };
    case actionTypes.GET_CART_ERROR:
      return {
        ...state,
        ...{
          error: action.error
        }
      };
    case actionTypes.UPDATE_CART_ERROR:
      return {
        ...state,
        ...{
          error: action.error
        }
      };
    default:
      return state;
  }
}

export default reducer;
