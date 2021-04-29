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
        products.map(({ id, image, name, price, shortDescription, description, units }) => 
          <Card
            key={id}
            id={id}
            price={price}
            name={name}
            shortDescription={shortDescription}
            image={image}
            units={units}
            description={description}
          />
        )
      }
    </CardListStyled>
  )
}

export default CardList;
