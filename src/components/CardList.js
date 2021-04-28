import styled from 'styled-components';

import Card from '../components/Card';

const CardListStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`


const CardList = ({ products }) => {
  return (
    <CardListStyled>
      {
        products.map(({ id, image, name, price, shortDescription, units }) => 
          <Card
            key={id}
            price={price}
            name={name}
            shortDescription={shortDescription}
            image={image}
            units={units}
          />
        )
      }
      
    </CardListStyled>
  )
}

export default CardList;
