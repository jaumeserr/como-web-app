import styled from 'styled-components';

import Card from './Card';

const GridView = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProductsGridView = ({ products }) => {
console.log("🚀 ~ file: ProductsGridView.js ~ line 12 ~ ProductsGridView ~ products", products)
  return(
    <GridView>
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
    </GridView>
  );
}

export default ProductsGridView;