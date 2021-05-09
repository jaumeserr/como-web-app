import styled from 'styled-components';

import Card from './Card';

const GridView = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 5px;
`

const ProductsGridView = ({ products }) => {
  return(
    <GridView>
      {
        products.map((product) => 
        <Card
          product={product}
          key={product.id}
        />
        )
      }
    </GridView>
  );
}

export default ProductsGridView;