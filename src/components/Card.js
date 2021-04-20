import { useState } from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../styledComponents/index';
import CardHover from './CardHover';

const CardStyled = styled.article`
  width: 250px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  position: relative;
  margin: 10px;
  
  .card__info {
    padding: 10px;
  }

  .card__image {
    border-bottom: 1px solid var(--principal);
  }
  
  .card__name {
    font-size: 18px;
    color: var(--principal);
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .card__price {
    font-size: 30px;
    font-weight: 700;
    color: var(--black);
    margin: 5px 0;
  }
`

const AddCardButtonStyled = styled(ButtonStyled)`
  width: 100%;
  border-radius: 3px;
`

const Card = ({ id, price, name, img, shortDesc }) => {
  const [isHovered, setIsHovered] = useState(false)
  return(
    <CardStyled
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="card__image" 
        src="https://media.fabfab.net/images/products/popup/boton-de-material-sintetico-bunde-80--24_13001_80.jpg"
        alt={name}
      />
      <div className="card__info">
        <p className="card__name">
          Cremallera
        </p>
        <p className="card__shortdesc">Tipo malla 3</p>
        <p className="card__price">1€</p>
        <AddCardButtonStyled>
          ADD TO CART
        </AddCardButtonStyled>
      </div>
      {isHovered ? <CardHover /> : ''}
    </CardStyled>
  );
}

export default Card