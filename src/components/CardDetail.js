import INFO_CARD from '../db';

import styled from 'styled-components';
import { ButtonStyled } from '../styledComponents'
import { useState } from 'react';


const CardDetailStyled = styled.section`
  display: flex;
  flex-direction: column;
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

const ButtonCarDetailStyled = styled(ButtonStyled)`
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  background-color: var(--white);
  cursor: pointer;
  font-weight: 700;

  :hover {
    background-color: var(--white)
  }
`

const CardDetail = () => {
  const [counter, setCounter] = useState(0)
  const { price, name, description, shortDesc, img } = INFO_CARD[0]
  return(
    <>
      <CardDetailStyled>
        <div>
          <img src={img} />
        </div>
        <div className="card-detail__info">
          <p className="card-detail__name">{name}</p>
          <p className="card-detail__price">{price}<span style={{fontSize: 18}}> € / uni</span></p>
          <p>Quantity:</p>
          <div className="card-detail__counter">
            <ButtonCarDetailStyled onClick={() => setCounter(counter-1)}>-</ButtonCarDetailStyled>
            <span>{counter}</span>
            <ButtonCarDetailStyled onClick={() => setCounter(counter+1)}>+</ButtonCarDetailStyled>
          </div>
          <div className="card-detail__buttons">
            <ButtonCarDetailStyled>ADD TO CART</ButtonCarDetailStyled>
            <ButtonCarDetailStyled>BUY NOW</ButtonCarDetailStyled>
            <ButtonCarDetailStyled>FAV</ButtonCarDetailStyled>
          </div>
          <p className="card-detail__title">Description</p>
          <p>{description}</p>
        </div>
      </CardDetailStyled>
    </>
  );
}

export default CardDetail;