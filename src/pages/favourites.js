import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import MainLayout from "../components/layouts/MainLayout";
import CartProduct from '../components/CartProduct';

const FavouritesPage = () => {
  const user = useSelector(state => state.user)
  const favs = useSelector(state => state.favData.favItems)
  console.log("🚀 ~ file: favourites.js ~ line 9 ~ FavouritesPage ~ favs", favs)
  
  // const [favourites, setFavourites] = useState();

  useEffect(() => {

  }, [])

  return(
    <MainLayout>
      <ul>
      {
        favs.map(({ name, price, shortDescription, image }) => 
          <CartProduct
            name={name}
            price={price}
            shortDescription={shortDescription}
            image={image}
          />
        )
      }
      </ul>
    </MainLayout>
  );
}

export default FavouritesPage;