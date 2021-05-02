const INI_STATE = {
  cartItems: []
};

// function cartReducer(state = INI_STATE, action) {
//   if(action.type === 'ADD_TO_CARD') {
//     return {
//       ...state,
//       cartItems: handleAddToCard({
//         prevCartItems: state.cartItems,
//         nextCartItem: action.payload
//       })
//     }
//   }
//   return state;
// }

function cartReducer(state = INI_STATE, action) {
  if(action.type === 'ADD_TO_CARD') {
    return {
      ...state,
      cartItems: [
        ...state.cartItems,
        {
          ...action.payload
        }
      ]
    }
  }
  return state;
}

export default cartReducer;