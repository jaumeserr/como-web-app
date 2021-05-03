import { useSelector } from 'react-redux';

import CartProduct from "../components/CartProduct";
import FormLayout from '../components/layouts/FormLayout';

const CartList = () => {
  const cart = useSelector(state => state.cardData.cartItems)
  console.log("🚀 ~ file: cart.js ~ line 9 ~ CartList ~ cart", cart)

  return(
    <FormLayout>
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
    </FormLayout>
  );
}

export default CartList;