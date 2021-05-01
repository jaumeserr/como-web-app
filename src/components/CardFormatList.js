import styled from 'styled-components';
import { Button } from './UI';
import { Flex } from './UI';

const AddCardButtonStyled = styled(Button)`
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  border: 1px solid #f8f8f8;
`

const CardStyled = styled.article`
  width: 100%;
  border: 1px solid var(--primary);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  margin: 10px;

  .card__info {
    padding: 10px;
  }

  .card__image {
    border-bottom: 1px solid #f8f8f8;
    width: 100px;
    height: auto;
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

const CardFormatList = ({ id, image, name, price, shortDescription, description, units }) => {
  return(
    <CardStyled>
      <img className="card__image" src={image} alt={name} />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__shortdesc">{description}</p>
        <p className="card__price">{price}<span style={{fontSize: 16}}>€ / {units}</span></p>
        <AddCardButtonStyled>
          ADD TO CART
        </AddCardButtonStyled>
      </div>
    </CardStyled>
  );
}

export default CardFormatList;