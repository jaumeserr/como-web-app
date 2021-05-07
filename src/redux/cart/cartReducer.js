const INI_STATE = {
  cartItems: []
};

function cartReducer(state = INI_STATE, action) {
  if(action.type === 'ADD_TO_CART') {
    const productIndex = state.cartItems.findIndex(item => {
      return item.id === action.payload.id
    })
    if(productIndex < 0) {
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1
          }
        ]
      } 
    } else {
      const cartProduct = state.cartItems[productIndex]
      const newProduct = {
        ...cartProduct,
        quantity: cartProduct.quantity + 1
      }
      const newCartItems = [...state.cartItems]
      newCartItems[productIndex] = newProduct
      return {
        ...state,
        cartItems: newCartItems
      }
    }
  }

  if(action.type === 'REMOVE_FROM_CART') {
    const newCartItems = state.cartItems.filter(item => {
      return item.id !== action.payload.id
    })
    
    return {
      ...state,
      cartItems: newCartItems
    }
  }

  if(action.type === 'DECREMENT_ITEM_FROM_CART') {
    const productIndex = state.cartItems.findIndex(item => {
      return item.id === action.payload.id
    })
    const cartProduct = state.cartItems[productIndex]
    if(cartProduct.quantity === 1) {
      const newCartItems = state.cartItems.filter(item => {
        return item.id !== action.payload.id
      })
      
      return {
        ...state,
        cartItems: newCartItems
      }
    } else {
      const newProduct = {
        ...cartProduct,
        quantity: cartProduct.quantity - 1
      }
      const newCartItems = [...state.cartItems]
      newCartItems[productIndex] = newProduct
      return {
        ...state,
        cartItems: newCartItems
      } 
    }
  }
  
  return state;
  
}

export default cartReducer;