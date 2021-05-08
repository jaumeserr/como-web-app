import { useSelector, useDispatch } from "react-redux";

import { removeAllProducts } from '../redux/cart/cartActions';

import CartProduct from "../components/CartProduct";
import FormLayout from "../components/layouts/FormLayout";

const CartList = () => {
  const cart = useSelector((state) => state.cardData.cartItems);
  const dispatch = useDispatch();
  console.log("🚀 ~ file: cart.js ~ line 9 ~ CartList ~ cart", cart);

  return (
    <FormLayout>
      <button onClick={() => dispatch(removeAllProducts())}>Clear</button>
      {cart.map((product) => (
        <CartProduct
          product={product}
        />
      ))}
      <p>Total: {}</p>
    </FormLayout>
  );
};

export default CartList;
