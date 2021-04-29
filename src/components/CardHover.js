import styled from 'styled-components';
import { useState } from 'react';

import SearchIcon from '../assets/search.svg';
import { Link, Route, Switch } from 'react-router-dom';
import FavIco from '../components/FavIco';
import SearchIco from '../components/SearchIco';
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
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid var(--primary);
    box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
    background-color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    :last-child {
      border-top: 1px solid var(--principal);
    }
  }
`


const CardHover = ({ id, image, name, price, shortDescription, description, units }) => {
  const [hoveredFav, setHoveredFav] = useState(false);
  const [hoveredSearch, setHoveredSearch] = useState(false);

  return(
    <>
    <CardHoverStyled>
      <li
        onMouseEnter={() => setHoveredFav(true)}
        onMouseLeave={() => setHoveredFav(false)}
      >
        <FavIco
          color={hoveredFav ? 'red' : 'black'}
        />
      </li>
      <li
        onMouseEnter={() => setHoveredSearch(true)}
        onMouseLeave={() => setHoveredSearch(false)}
      >
        
        <Link to={`/detail/${id}`}>
          <SearchIco
            color={hoveredSearch ? 'red' : 'black'}  
          />
        </Link>
        </li>
    </CardHoverStyled>
    </>
  );
}

export default CardHover;