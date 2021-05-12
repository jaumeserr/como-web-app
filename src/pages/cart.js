import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { removeAllProducts } from "../redux/cart/cartActions";
import CartProduct from "../components/CartProduct";
import PageHeading from "../components/PageHeading";
import { Flex, Button, StyledLink } from "../components/UI";
import CartLayout from "../components/layouts/CartLayout";

const CartHeader = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.border};
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.box_bg};
  border-radius: 4px;
  padding-left: 20px;

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
  margin-top: 30px;
`;

const CartOption = styled.div`
  display: flex;
  margin-left: 50%;
  margin-top: 10px;
`;

const ButtonsCartOption = styled(Button)`
  width: 50%;
  ${(props) =>
    props.clearButton &&
    css`
      margin-right: 10px;
    `}
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 200px 0;
  p {
    padding-bottom: 30px;
    font-size: 20px;
  }
`;

const Total = styled(Flex)`
  flex-direction: column;
  padding: 20px 0;

  .total-price {
    font-size: 25px;
  }
`;

const CartList = () => {
  const cart = useSelector((state) => state.cardData.cartItems);
  const totalAmount = useSelector((state) => state.cardData.totalAmount);
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
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <CartProduct product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <>
          <EmptyCart>
            <p>Your Cart is empty, insert products</p>
            <StyledLink to="/">Go shopping</StyledLink>
          </EmptyCart>
        </>
      )}
      <CartFooter>
        <Total>
          <Flex style={{ paddingBottom: '10px'}} align="center" justify="space-between">
            <p>Items subtotal:</p>
            <p style={{ fontSize: "20px" }}>{totalAmount.toFixed(2)}€</p>
          </Flex>
          <Flex
            style={{
              borderTop: "1px solid #D8D9D7",
              borderBottom: "1px solid #D8D9D7",
              padding: '10px 0'
            }}
            align="center"
            justify="space-between"
          >
            <p>Taxes:</p>
            <p style={{ fontSize: "20px" }}>21%</p>
          </Flex>
          <Flex style={{ paddingTop: '10px'}} align="center" justify="space-between">
            <p><strong>Cart total:</strong></p>
            <p style={{ fontSize: "20px" }}><strong>{(totalAmount * 0.21 + totalAmount).toFixed(2)}€</strong></p>
          </Flex>
        </Total>
      </CartFooter>
      <CartOption>
        {cart.length > 0 ? (
          <>
            <ButtonsCartOption
              clearButton
              onClick={() => dispatch(removeAllProducts())}
            >
              Clear Cart
            </ButtonsCartOption>
            <ButtonsCartOption>Checkout</ButtonsCartOption>
          </>
        ) : (
          ""
        )}
      </CartOption>
    </CartLayout>
  );
};

export default CartList;
