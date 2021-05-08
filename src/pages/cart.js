import { useSelector, useDispatch } from "react-redux";

import { removeAllProducts } from "../redux/cart/cartActions";
import CartProduct from "../components/CartProduct";
import CartLayout from "../components/layouts/CartLayout";
import PageHeading from "../components/PageHeading";
import styled from "styled-components";
import { Flex } from "../components/UI";

const CartHeader = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.border};
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.box_bg};
  border-radius: 4px;

  p {
    padding: 20px;
  }
`;

const CartFooter = styled.div`
  background-color: ${(props) => props.theme.color.box_bg};
  border: 1px solid ${(props) => props.theme.color.border};
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-left: 50%;
  border-radius: 4px;
`;

const Total = styled(Flex)`
  justify-content: space-between;
  padding: 10px 0;
`;

const CartList = () => {
  const cart = useSelector((state) => state.cardData.cartItems);
  const dispatch = useDispatch();

  return (
    <CartLayout>
      <PageHeading title="Cart" />
      <CartHeader>
        <p className="item-label">your item</p>
        <p className="price-label">description</p>
        <p className="quantity-label">quantity</p>
        <p className="total-label">price</p>
      </CartHeader>
      <div>
        {cart.length > 0 ? (
          <button onClick={() => dispatch(removeAllProducts())}>Clear</button>
        ) : (
          ""
        )}
        {cart.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))}
      </div>
      <CartFooter>
        <Total style={{ borderBottom: `1px solid #e8e8e8` }}>
          <p>Item {} subtotal:</p>
          <p>PRICE</p>
        </Total>
        <Total>
          <p>estimated total {} subtotal:</p>
          <p>PRICE</p>
        </Total>
      </CartFooter>
    </CartLayout>
  );
};

export default CartList;
