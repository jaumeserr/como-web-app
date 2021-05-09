import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  incrementProduct,
  decrementProduct,
} from "../redux/cart/cartActions";
import { FaRegTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { Button, Flex } from "../components/UI";

const Quantity = styled.span`
  padding: 0 10px;
  font-size: 20px;
`;

const ProductCounter = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Flex align="center">
      <Button
        style={{ width: "40px" }}
        onClick={() => dispatch(decrementProduct(product))}
      >
        {product.quantity === 1 ? (
          <FaRegTrashAlt size={20} />
        ) : (
          <FaMinus size={20} />
        )}
      </Button>
      <Quantity>{product.quantity}</Quantity>
      <Button
        style={{ width: "40px" }}
        onClick={() => dispatch(incrementProduct(product))}
      >
        <FaPlus size={20} />
      </Button>
    </Flex>
  );
};

export default ProductCounter;
