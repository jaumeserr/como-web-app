import Card from "./Card"

const ProductsListView = ({ products }) => {
  return(
    <div>
      <h1>List View</h1>
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

    </div>
  );
}

export default ProductsListView;