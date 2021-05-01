import styled from 'styled-components';

import Card from "./Card";
import { Flex } from './UI';

const ProductsListView = ({ products }) => {
  return(
    <Flex direction="column">
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

    </Flex>
  );
}

export default ProductsListView;