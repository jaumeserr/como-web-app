import styled from 'styled-components';
import { useState } from 'react';

import SearchIcon from '../assets/search.svg';
import { Link } from 'react-router-dom';
import FavIco from '../components/FavIco';
import SearchIco from '../components/SearchIco';


import { BsHeartFill, BsSearch } from 'react-icons/bs';


import CardDetail from '../components/CardDetail';
import CardList from './CardList';

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


const CardHover = ({ id, image, name, price, shortDescription, description, units }) => {
  return(
    <CardHoverStyled>
      <li>
        <BsHeartFill size={20} />
      </li>
      <li>
        <Link to={`/detail/${id}`}>
          <BsSearch size={20} />
        </Link>
        </li>
    </CardHoverStyled>
  );
}

export default CardHover;