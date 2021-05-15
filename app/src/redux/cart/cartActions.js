import { addToCart, incrementItemFromCart, decrementItemFromCart, removeItemFromCart, removeAllItems } from '../../controllers/cart';
import { createObject, updateObjectWithId, getObjectById } from '../../services/db';

export const refreshCart = () => {
  return async (dispatch) => {
    const cartId = localStorage.getItem('cartId')
    const { success, data } = await getObjectById('carts', cartId)
    if(success) {
      dispatch({ type: "SET_CART", payload: data });
    }
  }
}

export const addProduct = (cart, product) => {
  return async (dispatch) => {
    const newCart = addToCart(cart, product)
    if(newCart.id) {
      const { success } = await updateObjectWithId('carts', newCart, newCart.id)
      if(success) {
        dispatch({ type: "SET_CART", payload: newCart });
      }
    } else {
      const { success, data } = await createObject('carts', newCart)
      if(success) {
        newCart.id = data;
        localStorage.setItem('cartId', data)
        dispatch({ type: "SET_CART", payload: newCart });
      }
    }
  }
};

export const incrementCart = (cart, product) => {
  return async (dispatch) => {
    const newCart = incrementItemFromCart(cart, product)
    const { success } = await updateObjectWithId('carts', newCart, newCart.id)
    if(success) {
      dispatch({ type: "INCREMENT_CART", payload: newCart });
    }
  }
};

export const decrementCart = (cart, product) => {
  return async (dispatch) => {
    const newCart = decrementItemFromCart(cart, product)
    const { success } = await updateObjectWithId('carts', newCart, newCart.id)
    if(success) {
      if(newCart.cartItems.length === 0) {
        newCart.id = ''
        localStorage.removeItem('cartId')
      }
      dispatch({ type: "DECREMENT_CART", payload: newCart });
    }
  }
};

export const removeProduct = (cart, product) => {
  return async (dispatch) => {
    const newCart = removeItemFromCart(cart, product)
    const { success } = await updateObjectWithId('carts', newCart, newCart.id)
    if(success) {
      if(newCart.cartItems.length === 0) {
        newCart.id = ''
        localStorage.removeItem('cartId')
      }
      dispatch({ type: "REMOVE_PRODUCT", payload: newCart });
    }
  }
}

export const removeAllProducts = (cart, product) => {
  return async (dispatch) => {
    const newCart = removeAllItems(cart, product)
    const { success } = await updateObjectWithId('carts', newCart, newCart.id)
    if(success) {
      localStorage.removeItem('cartId')
      newCart.id = ''
      dispatch({ type: "REMOVE_ALL_PRODUCTS", payload: newCart });
    }
  }
}
