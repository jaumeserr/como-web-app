import { useEffect } from "react";
import { useState } from "react";

import { getObjectByFavourites } from '../services/db';
import MainLayout from "../components/layouts/MainLayout";

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  const fetchFavs = async () => {
    await getObjectByFavourites('profiles', 'jaumeserr@gmail.com');

  }
  
  useEffect(() => {
    fetchFavs();
  }, [])

  return(
    <MainLayout>
      {
        favourites.map(favourite => console.log(favourite))
      }
    </MainLayout>
  );
}

export default FavouritesPage;