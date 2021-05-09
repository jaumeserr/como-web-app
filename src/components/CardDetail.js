import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getObjectById } from '../services/db';
import { Button } from './UI';
import { addProduct } from '../redux/cart/cartActions';
import MainLayout from './layouts/MainLayout';

const CardDetailStyled = styled.section`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.color.border};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  div:first-child {
    
    img {
      padding: 20px;
      width: 300px;
    }
  }

  .card-detail__info {
    padding: 20px 20px 30px 0;
  }

  .card-detail__name {
    font-size: 30px;
    text-transform: uppercase;
    color: ${props => props.theme.color.tertiary}
  }

  .card-detail__price {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .card-detail__title {
    color: var(--secondary);
    font-size: 25px;
    display: block;
    border-bottom: 1px solid ${props => props.theme.color.border};
    margin-bottom: 5px;
    font-weight: 700;
  }

  .card-detail__counter {
    margin-top: 5px;
    margin-bottom: 10px;

    span {
      padding: 0 10px;
      font-size: 20px;
    }
  }

  .card-detail__buttons {
    display: flex;
    margin-bottom: 20px;
  }
`

const ButtonCounter = styled(Button)`
  padding: 10px 15px;
`

const ButtonBack = styled.button`
  background-color: white;
  border: 1px solid ${props => props.theme.color.border};
  padding: 15px 25px;
  font-size: 16px;
  margin-left: 60px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: none;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.color.secondary}
  }
`

const CardDetail = (props) => {
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState('')
  const productId = props.match.params.id
  const dispatch = useDispatch();
  
  const fetchProduct = async (productId) => {
    const { success, data } = await getObjectById('products', productId)
    if(success) {
      setProduct(data)
    }
  }

  useEffect(() => {
    fetchProduct(productId) //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleGoBack = () => {
    props.history.goBack();
  }

  const handleAddToCard = (product) => {
    dispatch(addProduct(product))
  }

  const { image, name, price, description, units } = product;

  return (
    <MainLayout>
      <div>
        <ButtonBack onClick={handleGoBack}>Go back</ButtonBack>
        <CardDetailStyled>
          <div>
            <img src={image} alt={name} />
          </div>
          <div className="card-detail__info">
            <p className="card-detail__name">{name}</p>
            <p className="card-detail__price">{price}<span style={{fontSize: 18}}> € / {units}</span></p>
            <p>Quantity:</p>
            <div className="card-detail__counter">
              <ButtonCounter onClick={() => setCounter(counter-1)}>-</ButtonCounter>
              <span>{counter}</span>
              <ButtonCounter onClick={() => setCounter(counter+1)}>+</ButtonCounter>
            </div>
            <div className="card-detail__buttons">
              <Button onClick={() => handleAddToCard(product)}>ADD TO CART</Button>
              <Button>FAV</Button>
            </div>
            <p className="card-detail__title">Description</p>
            <p>{description}</p>
          </div>
        </CardDetailStyled>
      </div>
    </MainLayout>
  );
}

export default CardDetail;