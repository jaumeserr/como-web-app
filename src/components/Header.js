import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { logout } from '../services/auth';
import FavIcon from '../assets/favs.svg';
import LogoutIcon from '../assets/signout.svg';
import CartIcon from '../assets/cart.svg';

const HeaderStyled = styled.header`
  padding: 0 20px;
  background-color: ${props => props.theme.color.fourth};

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    max-width: 1200px;
    margin: 0 auto;
  }
  li {
    padding: 0 20px;
    border-left: 1px solid var(--lightgray);
    a {
      text-decoration: none;
      color: var(--black);
    }
  }
  .user {
      display: flex;
      align-items: center;
      img {
        margin-left: 5px;
        cursor: pointer;
      }
    }
  li img {
    width: 22px;
    height: auto;
  }
  li:first-child {
    flex: 1;
    border: none;
  }
  .cart {
    position: relative;
    
    &__counter {
      background-color: white;
      color: black;
      border: 1px solid black;
      font-size: 12px;
      line-height:1.4;
      border-radius: 8px;
      text-align: center;
      width: 17px;
      height: 17px;
      margin-left: 4px;
      position: absolute;
      top: -16px;
      right: -9px;
    }
  }
`

const Header = ({ products }) => {
  const user = useSelector(state => state.user)
  return(
    <HeaderStyled>
      <ul>
        <li>
          <Link to="/">COMO MATARÓ</Link>
        </li>
        <li>
          <Link to="/favourites">
            <img src={FavIcon} alt="Favs" />
          </Link>
        </li>
        <li> 
          <Link to="/cart" className="cart">
            <img src={CartIcon} alt="Cart" />
            <span className="cart__counter">
              {
                products ? products.length : null
              }
            </span>
          </Link>
        </li>
        <li>
          {
            user
            ? <span className="user">Welcome back, {user.name} <img src={LogoutIcon} onClick={logout}/></span>
            : <Link to="/login">My account</Link>
          }
        </li>
      </ul>
    </HeaderStyled>
  );
}

export default Header;