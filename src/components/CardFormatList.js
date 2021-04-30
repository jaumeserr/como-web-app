import styled from 'styled-components';

import { Flex } from './UI';

const CardStyled = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 5px;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  padding: 10px;
`

const CardFormatList = () => {
  return(
    <>
      {/* <CardStyled>
        <img className="card__image" src={image} alt={name} />
        <div className="card__info">
          <p className="card__name">{name}</p>
          <p className="card__shortdesc">{shortDescription}</p>
          <p className="card__price">{price}<span style={{fontSize: 16}}>€ / {units}</span></p>
          <AddCardButtonStyled>
            ADD TO CART
          </AddCardButtonStyled>
        </div>
      </CardStyled> */}
    </>
  );
}

export default CardFormatList;