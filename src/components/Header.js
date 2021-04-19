import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components';

import FavIcon from '../assets/favs.svg';
import SearchIcon from '../assets/search.svg';
// import CartIcon from '../assets/cart.svg';

const HeaderStyled = styled.header`
  padding: 0 20px;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }
  li {
    padding: 0 20px;
    border-left: 1px solid #e8e8e8;
    a {
      text-decoration: none;
      color: black;
    }
  }
  li img {
    width: 20px;
    height: auto;
  }
  li:first-child {
    flex: 1;
    border: none;
  }
  .counter-cart {
    background-color: black;
    color: white;
    border-radius: 50%;
    padding: 2px 8px;
    margin-left: 4px;
  }
`

const Header = () => {
  return(
    <HeaderStyled>
      <ul>
        <li>
          <Link to="/">COMO MATARÓ</Link>
        </li>
        <li>
          <Link to="/favourites">
            <img
              src={FavIcon}
              alt="Favs"
            />
          </Link>
        </li>
        <li>
          <img
            src={SearchIcon}
            alt="Search"
          />
        </li>
        <li>
          <Link to="/login">
            My account
          </Link>
        </li>
        <li> 
          <Link to="/cart">
            Cart
            <span className="counter-cart">
              5
            </span>
          </Link>
        </li>
      </ul>
    </HeaderStyled>
  );
}

export default Header;