import { useSelector } from "react-redux";

import CartLayout from "../components/layouts/CartLayout";
import PageHeading from "../components/PageHeading";
import CardFavs from "../components/CardFavs";
import { Flex, Spacer } from "../components/UI";

const FavouritesPage = () => {
  const favs = useSelector((state) => state.favData.favItems);

  return (
    <CartLayout>
      <Spacer />
      <PageHeading title="Favourites" />
      <Flex justify="flex-start">
        {favs.map((product) => (
          <CardFavs product={product} />
        ))}
      </Flex>
      <Spacer />
    </CartLayout>
  );
};

export default FavouritesPage;