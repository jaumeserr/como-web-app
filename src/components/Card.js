import styled, { css } from 'styled-components';
import { useState } from 'react';

import CardHover from './CardHover';
import { Button } from './UI';

const CardStyled = styled.article`
  width: 200px;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  margin: 10px;
  overflow: hidden;
  position: relative;

  .card__info {
    padding: 10px;
  }

  .card__image {
    border-bottom: 1px solid #f8f8f8;  
  }
  
  .card__name {
    font-size: 18px;
    color: ${props => props.theme.color.tertiary};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .card__price {
    font-size: 25px;
    color: ${props => props.theme.color.tertiary};
    margin-bottom: 10px;
  }
`

const AddCardButtonStyled = styled(Button)`
  border-radius: 4px;
  padding: 10px;
  width: 100%;
`

const Card = ({ id, image, name, price, shortDescription, description, units }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return(
    <CardStyled
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="card__image" src={image} alt={name} />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__shortdesc">{shortDescription}</p>
        <p className="card__price">{price}<span style={{fontSize: 16}}>€ / {units}</span></p>
      </div>
      <AddCardButtonStyled>ADD TO CART</AddCardButtonStyled>
      
      {isHovered && <CardHover
        id={id}
        image={image}
        name={name}
        price={price}
        description={description}
        units={units} />
      }
    </CardStyled>
  );
}

export default Card;