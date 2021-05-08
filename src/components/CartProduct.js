import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  removeProduct,
  incrementProduct,
  decrementProduct,
} from "../redux/cart/cartActions";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../components/UI";

const CartProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  padding: 10px;
  position: relative;
  margin-top: 20px;

  .product-image {
    width: 130px;
  }

  .product-name {
    font-size: 22px;
    color: ${(props) => props.theme.color.tertiary};
  }

  .product-block-description {
    width: 150px;
  }

  .product-description {
    font-size: 18px;
    margin-top: 5px;
  }

  .product-quantity {
    display: flex;
    align-items: center;

    p {
      padding: 0 10px;
      font-size: 20px;
    }
  }

  .product-price {
    font-size: 25px;
    width: 80px;
    text-align: right;
  }

  .last {
    display: flex;
    align-items: center;
  }

  .product-remove {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const {
    image,
    name,
    shortDescription,
    quantity,
    price,
    totalPrice,
  } = product;

  return (
    <CartProductStyled>
      <img className="product-image" src={image} alt={name} />
      <div className="product-block-description">
        <p className="product-name">{name}</p>
        <p className="product-description">{shortDescription}</p>
      </div>
      <div className="product-quantity">
        <Button
          style={{ width: "40px" }}
          onClick={() => dispatch(decrementProduct(product))}
        >
          -
        </Button>
        <p>{quantity}</p>
        <Button
          style={{ width: "40px" }}
          onClick={() => dispatch(incrementProduct(product))}
        >
          +
        </Button>
      </div>
      <div className="last">
        <p className="product-price">{quantity === 1 ? price : totalPrice}€</p>
      </div>
      <FaRegTrashAlt
        className="product-remove"
        size={20}
        onClick={() => dispatch(removeProduct(product))}
      />
    </CartProductStyled>
  );
};

export default CartProduct;
