import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { getObjectById } from '../services/db';

const CardDetailStyled = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  div:first-child {
    
    img {
      width: 100%;
      border:1px solid var(--principal);
      border-radius: 8px;
      display: block;

      @media (min-width: 768px) {
        min-width: 400px;
      }
    }
  }

  .card-detail__info {
    padding: 15px;

    @media (min-width: 768px) {
      padding: 10px 10px 0 40px;
    }
  }

  .card-detail__name {
    font-size: 30px;
    text-transform: uppercase;
    color: var(--principal)
  }

  .card-detail__price {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .card-detail__title {
    color: var(--secondary);
    font-size: 25px;
    display: block;
    border-bottom: 1px solid var(--lightgray);
    margin-bottom: 5px;
    font-weight: 700;
  }

  .card-detail__counter {
    margin-top: 5px;

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

const CardDetail = (props) => {
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState('')
  const productId = props.match.params.id
  
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

  const { price, image, name, units, description } = product

  return (
    <MainLayout>
      <button onClick={handleGoBack}>Go back</button>
      <CardDetailStyled>
        <div>
          <img src={image} alt={name} />
        </div>
        <div className="card-detail__info">
          <p className="card-detail__name">{name}</p>
          <p className="card-detail__price">{price}<span style={{fontSize: 18}}> € / {units}</span></p>
          <p>Quantity:</p>
          <div className="card-detail__counter">
            <button onClick={() => setCounter(counter-1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter+1)}>+</button>
          </div>
          <div className="card-detail__buttons">
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
            <button>FAV</button>
          </div>
          <p className="card-detail__title">Description</p>
          <p>{description}</p>
        </div>
      </CardDetailStyled>
    </MainLayout>
  );
}

export default CardDetail;