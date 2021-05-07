import styled from 'styled-components';

import Card from './Card';

const GridView = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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