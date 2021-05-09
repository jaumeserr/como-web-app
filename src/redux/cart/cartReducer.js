const INI_STATE = {
  cartItems: [],
  totalAmount: 0
};

function cartReducer(state = INI_STATE, action) {
  if(action.type === 'ADD_TO_CART') {
    const productIndex = state.cartItems.findIndex(item => {
      return item.id === action.payload.id
    })
    const newTotalAmount = state.totalAmount + action.payload.price 
    if(productIndex < 0) {
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
            price: action.payload.price
          }
        ],
        totalAmount: newTotalAmount
      }
    } else {
      const cartProduct = state.cartItems[productIndex]
      const newProduct = {
        ...cartProduct,
        quantity: cartProduct.quantity + 1,
        totalPrice: (action.payload.price * (cartProduct.quantity + 1)).toFixed(2)
      }
      const newCartItems = [...state.cartItems]
      newCartItems[productIndex] = newProduct
      return {
        ...state,
        cartItems: newCartItems,
        totalAmount: state.totalAmount + action.payload.price
      } 
    }
  }

  if(action.type === 'REMOVE_FROM_CART') {
    const newCartItems = state.cartItems.filter(item => {
      return item.id !== action.payload.id
    })
    const newTotalAmount = state.totalAmount - (action.payload.price * action.payload.quantity)
    return {
      ...state,
      cartItems: newCartItems,
      totalAmount: newTotalAmount
    }
  }

  if(action.type === 'INCREMENT_ITEM_FROM_CART') {
    const productIndex = state.cartItems.findIndex(item => {
      return item.id === action.payload.id
    })
    const cartProduct = state.cartItems[productIndex]
    const newProduct = {
      ...cartProduct,
      quantity: cartProduct.quantity + 1,
      totalPrice: (action.payload.price * (cartProduct.quantity + 1)).toFixed(2)
    }
    const newCartItems = [...state.cartItems]
    newCartItems[productIndex] = newProduct
    return {
      ...state,
      cartItems: newCartItems,
      totalAmount: state.totalAmount + action.payload.price
    }  
  }

  if(action.type === 'DECREMENT_ITEM_FROM_CART') {
    const productIndex = state.cartItems.findIndex(item => {
      return item.id === action.payload.id
    })
    const newTotalAmount = state.totalAmount - action.payload.price 
    const cartProduct = state.cartItems[productIndex]
    if(cartProduct.quantity === 1) {
      const newCartItems = state.cartItems.filter(item => {
        return item.id !== action.payload.id
      })
      
      return {
        ...state,
        cartItems: newCartItems,
        totalAmount: newTotalAmount
      }
    } else {
      const newProduct = {
        ...cartProduct,
        quantity: cartProduct.quantity - 1,
        totalPrice: (action.payload.price * (cartProduct.quantity - 1)).toFixed(2)
      }
      const newCartItems = [...state.cartItems]
      newCartItems[productIndex] = newProduct
      return {
        ...state,
        cartItems: newCartItems,
        totalAmount: state.totalAmount - action.payload.price
      } 
    }
  }

  if(action.type === 'REMOVE_ALL_ITEMS_FROM_CART') {
    return {
      ...state,
      cartItems: [],
      totalAmount: 0
    }
  }
  
  return state;
  
}

export default cartReducer;