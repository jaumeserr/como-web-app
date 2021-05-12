import { addToCart, removeFromCart } from '../../controllers/cart';
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

//clear cart = borrar el id del localStorage

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

// export const removeProduct = (cart, product) => {
//   return async (dispatch) => {
//     const newCart = removeFromCart(cart, product)

//   }
// }

export const removeProduct = (product) => {
  return (dispatch) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: product }) 
  }
};

export const incrementProduct = (product) => {
  return (dispatch) => {
      dispatch({ type: "INCREMENT_ITEM_FROM_CART", payload: product }) 
  }
};

export const decrementProduct = (product) => {
  return { type: "DECREMENT_ITEM_FROM_CART", payload: product };
};

export const removeAllProducts = () => {
  return { type: "REMOVE_ALL_ITEMS_FROM_CART", payload: null };
};
