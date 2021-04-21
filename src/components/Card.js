import { useState } from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../styledComponents/index';
import CardHover from './CardHover';

const CardContainerStyled = styled.article`
  position: relative;
`

const CardStyled = styled.article`
  width: 200px;
  border: 1px solid var(--principal);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  position: relative;
  margin: 40px 10px 0;

  .card__info {
    padding: 10px;
    margin-bottom: 13px;
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
    font-size: 25px;
    color: var(--black);
    margin: 5px 0;
  }
`

const AddCardButtonStyled = styled(ButtonStyled)`
  border-radius: 50px;
  padding: 12px 25px;
  position: absolute;
  bottom: -20px;
  left: 17%;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
`

const Card = ({ id, price, name, img, shortDesc, unities }) => {
  const [isHovered, setIsHovered] = useState(false)
  return(
    <CardContainerStyled>
      <CardStyled
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="card__image" 
          src={img}
          alt={name}
        />
        <div className="card__info">
          <p className="card__name">
            {name}
          </p>
          <p className="card__shortdesc">{shortDesc}</p>
          <p 
            className="card__price">
              {price}<span style={{fontSize: 16}}>€ / {unities}</span>
          </p>
        </div>
        {isHovered && <CardHover />}
      </CardStyled>
      <AddCardButtonStyled>
        ADD TO CART
      </AddCardButtonStyled>
    </CardContainerStyled>
  );
}

export default Card