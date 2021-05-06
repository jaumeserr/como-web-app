import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Link, useParams } from 'react-router-dom';
import { BsHeartFill, BsSearch } from 'react-icons/bs';
import { createObjectWithId } from '../services/db';
import { useState } from 'react';
import { setUser } from '../redux/user/userActions'



const CardHoverStyled = styled.ul`
  position: absolute;
  right: 10px;
  top: 10px;
  list-style: none;
  animation: fadeout-fadein-right-to-left 400ms;
  
  @keyframes fadeout-fadein-right-to-left {
    0% {
      right: -10px;
      opacity: 0;
    }
    100% {
      right: 10px;
      opacity: 1;
    }
  }

  li {
    padding: 9px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
    background-color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }
`

const CardHover = ({product}) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const params = useParams();
  const { category } = params;

  const saveToFavs = async () => {
    const isFavourite = user.favourites.includes(product.id)

    const newFavourites = isFavourite
      ? user.favourites.filter(favourite => favourite !== product.id)
      : [ ...user.favourites, product.id ]  

    const userToSave = {
      ...user,
      favourites: newFavourites
    }

    const { success } = await createObjectWithId('profiles', userToSave, user.id)
    if (success) {
      dispatch(setUser(userToSave))
    }
  }

  const isFavourite = user.favourites.includes(product.id)

  return(
    <CardHoverStyled>
      <li>
        <BsHeartFill size={20} onClick={saveToFavs} fill={ isFavourite ? 'red' : 'black'} />
      </li>
      <li>
        <Link to={`/${category}/${product.id}`}>
          <BsSearch size={20} />
        </Link>
      </li>
    </CardHoverStyled>
  );
}

export default CardHover;