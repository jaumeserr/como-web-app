export const addProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('products');
    dispatch({ type: "ADD_TO_CART", payload: product });
  }
};

export const removeProduct = (product) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "REMOVE_FROM_CART", payload: product }) 
    }, 5000)
  }
};

export const incrementProduct = (product) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "INCREMENT_ITEM_FROM_CART", payload: product }) 
    }, 5000)
  }
};

export const decrementProduct = (product) => {
  return { type: "DECREMENT_ITEM_FROM_CART", payload: product };
};

export const removeAllProducts = () => {
  return { type: "REMOVE_ALL_ITEMS_FROM_CART", payload: null };
};
