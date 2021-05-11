import { useSelector } from "react-redux";
import { useState } from 'react';

import CartLayout from "../components/layouts/CartLayout";
import PageHeading from "../components/PageHeading";
import CardFavs from "../components/CardFavs";
import { Flex, Spacer } from "../components/UI";
import { useEffect } from "react";
import { getObjectById } from '../services/db';

const FavouritesPage = () => {
  const user = useSelector((state) => state.user)
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    getFavs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const getFavs = async() => {
    const result = await getObjectById('profiles', user.id)
    const { success, data } = result;
    if (success) {
      setFavourites(data.favourites);
    }
  }

  return (
    <CartLayout>
      <Spacer />
      <PageHeading title="Favourites" />
      <Flex justify="flex-start">
        {favourites.map((product, index) => (
          <CardFavs key={index} product={product} />
        ))}
      </Flex>
      <Spacer />
    </CartLayout>
  );
};

export default FavouritesPage;