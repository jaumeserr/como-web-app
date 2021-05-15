import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { incrementCart, decrementCart } from "../redux/cart/cartActions";

import { FaRegTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { Button, Flex } from "../components/UI";

const Quantity = styled.span`
  padding: 0 10px;
  font-size: 20px;
`;

const ProductCounter = ({ product }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cardData);

  return (
    <Flex align="center">
      <Button
        onClick={() => dispatch(decrementCart(basket, product))}
      >
        {product.quantity === 1 ? (
          <FaRegTrashAlt size={17} />
        ) : (
          <FaMinus size={17} />
        )}
      </Button>
      <Quantity>{product.quantity}</Quantity>
      <Button
        onClick={() => dispatch(incrementCart(basket, product))}
      >
        <FaPlus size={17} />
      </Button>
    </Flex>
  );
};

export default ProductCounter;
