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
        products.map((product) => 
          <Card
            key={product.id}
            product={product}
          />
        )
      }
    </CardListStyled>
  )
}

export default CardList;
