import styled from 'styled-components';

import { useState } from 'react';
import CardHover from './CardHover';
import { Button } from './UI';

const CardStyled = styled.article`
  width: 200px;
  border: 1px solid var(--primary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  margin: 10px;

  .card__info {
    padding: 10px;
  }

  .card__image {
    border-bottom: 1px solid #f8f8f8;  
  }
  
  .card__name {
    font-size: 18px;
    color: var(--secondary);
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .card__price {
    font-size: 25px;
    color: var(--black);
    margin-bottom: 10px;
  }
`

const AddCardButtonStyled = styled(Button)`
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  border: 1px solid #f8f8f8;
`

const Card = ({ image, name, price, shortDescription, units }) => {
  const [isHovered, setIsHovered] = useState(false)
  return(
    <CardStyled onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      <img className="card__image" src={image} alt={name} />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__shortdesc">{shortDescription}</p>
        <p className="card__price">{price}<span style={{fontSize: 16}}>€ / {units}</span></p>
        <AddCardButtonStyled>
          ADD TO CART
        </AddCardButtonStyled>
      </div>
      
      {isHovered && <CardHover />}
    </CardStyled>
  );
}

export default Card;