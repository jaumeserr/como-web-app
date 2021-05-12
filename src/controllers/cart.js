export const addToCart = (state, product) => {
  const productIndex = state.cartItems.findIndex(item => {
    return item.id === product.id
  })
  const newTotalAmount = state.totalAmount + product.price 
  if(productIndex < 0) {
    return {
      ...state,
      cartItems: [
        ...state.cartItems,
        {
          ...product,
          quantity: 1,
          price: product.price
        }
      ],
      totalAmount: newTotalAmount
    }
  } else {
    const cartProduct = state.cartItems[productIndex]
    const newProduct = {
      ...cartProduct,
      quantity: cartProduct.quantity + 1,
      totalPrice: (product.price * (cartProduct.quantity + 1)).toFixed(2)
    }
    const newCartItems = [...state.cartItems]
    newCartItems[productIndex] = newProduct
    return {
      ...state,
      cartItems: newCartItems,
      totalAmount: state.totalAmount + product.price
    } 
  }
}

export const incrementItemFromCart = (state, product) => {
  const productIndex = state.cartItems.findIndex(item => {
    return item.id === product.id
  })
  const cartProduct = state.cartItems[productIndex]
  const newProduct = {
    ...cartProduct,
    quantity: cartProduct.quantity + 1,
    totalPrice: (product.price * (cartProduct.quantity + 1)).toFixed(2)
  }
  const newCartItems = [...state.cartItems]
  newCartItems[productIndex] = newProduct
  return {
    ...state,
    cartItems: newCartItems,
    totalAmount: state.totalAmount + product.price
  }
}

export const decrementItemFromCart = (state, product) => {
  const productIndex = state.cartItems.findIndex(item => {
    return item.id === product.id
  })
  const newTotalAmount = state.totalAmount - product.price 
  const cartProduct = state.cartItems[productIndex]
  if(cartProduct.quantity === 1) {
    const newCartItems = state.cartItems.filter(item => {
      return item.id !== product.id
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
      totalPrice: (product.price * (cartProduct.quantity - 1)).toFixed(2)
    }
    const newCartItems = [...state.cartItems]
    newCartItems[productIndex] = newProduct
    return {
      ...state,
      cartItems: newCartItems,
      totalAmount: state.totalAmount - product.price
    } 
  }
}

export const removeItemFromCart = (state, product) => {
  const newCartItems = state.cartItems.filter(item => {
    return item.id !== product.id
  })
  const newTotalAmount = state.totalAmount - (product.price * product.quantity)
  return {
    ...state,
    cartItems: newCartItems,
    totalAmount: newTotalAmount
  }
}

export const removeAllItems = (state) => {
  return {
    ...state,
    cartItems: [],
    totalAmount: 0
  }
}



