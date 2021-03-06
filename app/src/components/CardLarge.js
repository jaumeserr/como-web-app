import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import CardHover from './CardHover';
import { addProduct } from '../redux/cart/cartActions';
import { Button } from './UI';

const CardStyled = styled.article`
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 5px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  
  .card__image {
    width: auto;
    height: 200px;
    margin-right: 30px;
  }
 
  .card__name {
    font-size: 18px;
    color: ${props => props.theme.color.tertiary};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .card__info {
    padding: 5px;
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

const CardLarge = (product) => {
  const [isHovered, setIsHovered] = useState(false)
  const dispatch = useDispatch();
  const { id, image, name, price, shortDescription, description, units } = product;

  const handleAddToCard = (product) => {
    dispatch(addProduct(product))
  }
  
  return(
    <CardStyled
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <img src={image} className="card__image" />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__shortdesc">{shortDescription}</p>
        <p>{description}</p>
        <p className="card__price">{price}<span style={{fontSize: 16}}>€ / {units}</span></p>
        <AddCardButtonStyled onClick={() => handleAddToCard(product)}>
          ADD TO CART
        </AddCardButtonStyled>
      </div>
      
      
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

export default CardLarge;