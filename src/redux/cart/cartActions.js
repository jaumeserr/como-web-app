export const addProduct = (product) => {
  return { type: 'ADD_TO_CART', payload: product }
}

export const removeProduct = (product) => {
  return { type: 'REMOVE_FROM_CART', payload: product }
}

export const decrementProduct = (product) => {
  return { type: 'DECREMENT_ITEM_FROM_CART', payload: product }
}

export const removeAllProducts = () => {
  return { type: 'REMOVE_ALL_ITEMS_FROM_CART', payload: null }
} 