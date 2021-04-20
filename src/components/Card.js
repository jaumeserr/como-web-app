import styled from 'styled-components';
import { ButtonStyled } from '../styledComponents/index';

const ContainerButtonStyled = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  margin: 20px 20px;
  :hover ${ButtonStyled} {
    background-color: var(--white);
    color: var(--black);
  }
  :hover {
    border: 1px solid red;
  }
`

const CardStyled = styled.article`
  width: 200px;
  border: 1px solid var(--lightGray);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  img {
    margin-bottom: 10px;
  }
  .short-description {
    color: var(--lightGray);
    margin-bottom: 10px;
  }
  .price {
    margin-bottom: 20px;
  }
`

const ButtonCardStyled = styled(ButtonStyled)`
  position: absolute;
  left: 43px;
  bottom: -20px;
  padding: 10px 20px;
  border-radius: 5px;
`

const Card = ({ 
  id,
  price,
  name,
  img,
  shortDesc
}) => {
  return(
    <ContainerButtonStyled
      onClick={() => console.log('Me has clicado')}
    >
      <CardStyled>
        <img src={img} alt={name}/>
        <p>{name}</p>
        <p className="short-description">{shortDesc}</p>
        <p className="price">{price}€</p>
      </CardStyled>
      <ButtonCardStyled>
        Add to Cart
      </ButtonCardStyled>
    </ContainerButtonStyled>
  );
}

export default Card