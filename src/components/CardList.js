import styled from 'styled-components';
import INFO_CARD from '../db.js';

import Card from '../components/Card';
import CardListMenu from './CardListMenu.js';

const CardListStyled = styled.section`
  display: flex;
  flex-direction: column;
`

const ListList = styled.div`
  display: flex;
  padding-top: 20px;
  border-left: 1px solid var(--primary);
  flex-wrap: wrap;
`

const CardList = () => {
  return (
    <CardListStyled>
      <CardListMenu />
      <ListList>
      {
        INFO_CARD.map(({ id, price, name, shortDesc, img, unities }) => 
          <Card
            key={id}
            price={price}
            name={name}
            shortDesc={shortDesc}
            img={img}
            unities={unities}
          />
        )
      }
      </ListList>
      
    </CardListStyled>
  )
}

export default CardList
