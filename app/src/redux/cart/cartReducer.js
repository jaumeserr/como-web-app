const INI_STATE = {
  cartItems: [],
  totalAmount: 0
};

function cartReducer(state = INI_STATE, action) {
  if(action.type === 'SET_CART') {
    return action.payload;
  }
    
  if(action.type === 'INCREMENT_CART') {
    return action.payload;
  }

  if(action.type === 'DECREMENT_CART') {
    return action.payload;
  }

  if(action.type === 'REMOVE_PRODUCT') {
    return action.payload;
  }

  if(action.type === 'REMOVE_ALL_PRODUCTS') {
    return action.payload;
  }
  
  return state;
}

export default cartReducer;