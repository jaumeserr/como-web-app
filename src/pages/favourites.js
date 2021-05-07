import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import MainLayout from "../components/layouts/MainLayout";

const FavouritesPage = () => {
  const user = useSelector(state => state.user)
  const favs = useSelector(state => state.user.favourites)
  
  const [favourites, setFavourites] = useState(favs);

  useEffect(() => {

  }, [])

  return(
    <MainLayout>
      <ul>
      {
        favourites.map((t) => 
          <li>{`producto: ${t}`}</li>
        )
      }
      </ul>
    </MainLayout>
  );
}

export default FavouritesPage;