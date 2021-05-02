import { useSelector } from 'react-redux';

import CartProduct from "../components/CartProduct";
import MainLayout from "../components/layouts/MainLayout";

const CartList = () => {
  const cart = useSelector(state => state.cardData.cartItems)
  console.log("🚀 ~ file: cart.js ~ line 9 ~ CartList ~ cart", cart)

  return(
    <MainLayout>
      {
        cart.map(({ name, price, shortDescription, image }) => 
          <CartProduct
            name={name}
            price={price}
            shortDescription={shortDescription}
            image={image}
          />
        )
      }
      <p>Total: {}</p>
    </MainLayout>
  );
}

export default CartList;