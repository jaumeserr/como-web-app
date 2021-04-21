import styled from 'styled-components';

import SearchIcon from '../assets/search.svg';
import FavIcon from '../assets/favs.svg';
import { Link } from 'react-router-dom';
import CardDetail from './CardDetail';


const CardHoverStyled = styled.ul`
  position: absolute;
  border: 1px solid var(--principal);
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.1);
  background-color: var(--white);
  right: 10px;
  top: 10px;
  list-style: none;
  border-radius: 4px;
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

    img {
      display: block;
      width: 20px;
    }

    :last-child {
      border-top: 1px solid var(--principal);
    }
  }
`


const CardHover = () => {
  return(
    <CardHoverStyled>
      <li>
        <img
          src={FavIcon}
          alt="Favs"
        />
      </li>
      <li>
        <Link to="/detail">
          <img
            src={SearchIcon}
            alt="Search"
            style={{color: "red"}}
          />
        </Link>
        </li>
    </CardHoverStyled>
  );
}

export default CardHover;