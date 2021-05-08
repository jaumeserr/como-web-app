import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'; 

import { removeProduct, decrementProduct } from '../redux/cart/cartActions';
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../components/UI";

const CartProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.border};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  padding: 20px;

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    text-align: center;

    p {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  img {
    width: 100px;
    margin-right: 20px;
  }

  .last{
    display: flex;
  }
`

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cardData.cartItems);
  console.log("🚀 ~ file: CartProduct.js ~ line 40 ~ CartProduct ~ cart", cart)
  const { image, name, shortDescription, price, quantity } = product;
  
  return(
    <CartProductStyled>
      <img className="product-image" src={image} alt={name}/>
      <div>
        <p className="product-name">{name}</p>
        <p className="product-description">{shortDescription}</p>
      </div>
      <div>
        <Button style={{ width: '40px' }} onClick={() => dispatch(decrementProduct(product))}>-</Button>
        <span style={{ padding: '0 10px'}}>{quantity}</span>
        <Button style={{ width: '40px' }}>+</Button>
      </div>
      <div className="last">
        <p className="product-price">{price}</p>
        <FaRegTrashAlt size={20} onClick={() => dispatch(removeProduct(product))} /> 
      </div>
    </CartProductStyled>
  )
}

export default CartProduct;