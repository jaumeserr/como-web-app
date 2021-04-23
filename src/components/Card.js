import { useState } from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../styledComponents/index';
import CardHover from './CardHover';

const CardStyled = styled.article`
  width: 180px;
  border: 1px solid var(--primary);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  position: relative;
  margin: 0 0 40px 20px;

  .card__info {
    padding: 10px;
    margin-bottom: 13px;
  }

  .card__image {
    border-bottom: 1px solid var(--primary);  
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
    margin: 0 0 10px 0;
  }
`

const AddCardButtonStyled = styled(ButtonStyled)`
  border-radius: 50px;
  padding: 10px 20px;
  position: absolute;
  left: 0; right: 0; bottom: -18px;
  margin: auto;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
`

const Card = ({ id, price, name, img, shortDesc, unities }) => {
  const [isHovered, setIsHovered] = useState(false)
  return(
    <CardStyled onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      <img className="card__image" src={img} alt={name} />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__shortdesc">{shortDesc}</p>
        <p className="card__price">{price}<span style={{fontSize: 16}}>€ / {unities}</span></p>
      </div>
      <AddCardButtonStyled>
        ADD TO CART
      </AddCardButtonStyled>
      {isHovered && <CardHover />}
    </CardStyled>
  );
}

export default Card