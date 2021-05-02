export const existingCartItem = ({
  prevCartItems,
  nextCartItem 
}) => {
  return prevCartItems.find(
    cartItem => cartItem.fush === nextCartItem.fush
  )
}

export const handleAddToCard = ({
  prevCartItems,
  nextCartItem
}) => {
  const quantityIncrement = 1
  const existCartItem = existingCartItem({ prevCartItems, nextCartItem })

  if(existCartItem) {
    return prevCartItems.map(cartItem => 
      cartItem.fush == nextCartItem.fush
      ? {
        ...cartItem,
        quantity: cartItem.quantity + quantityIncrement
      } : cartItem
    )
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement
    }
  ];
};