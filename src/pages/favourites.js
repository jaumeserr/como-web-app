import { useEffect } from "react";
import { useSelector } from 'react-redux';

import MainLayout from "../components/layouts/MainLayout";
import CartProduct from '../components/CartProduct';

const FavouritesPage = () => {
  const favs = useSelector(state => state.favData.favItems)

  useEffect(() => {

  }, [])

  return(
    <MainLayout>
      <ul>
      {
        favs.map((product) => 
          <CartProduct
            product={product}
          />
        )
      }
      </ul>
    </MainLayout>
  );
}

export default FavouritesPage;