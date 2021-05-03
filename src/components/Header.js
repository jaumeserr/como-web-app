import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { logout } from '../services/auth';
import LogoutIcon from '../assets/signout.svg';
import { IoLogOutOutline } from "react-icons/io5";

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
    border-left: 1px solid black;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .favs {
    border-left: none;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .logo {
    flex: 1;
    border: none;
  }
`

const Header = ({ product }) => {
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cardData.cartItems)
  
  return(
    <HeaderStyled>
      <ul>
        <li className='logo'>
          <Link to="/">COMO MATARÓ</Link>
        </li>
        <li className='favs'>
          <Link to="/favourites">
            Favourites
          </Link>
        </li>
        <li> 
          <Link to="/cart" className="cart">
            Cart ({cart.length})
          </Link>
        </li>
        <li>
          {
            user
            ? <span className="user">Welcome back, {user.name} <IoLogOutOutline style={{ cursor: 'pointer', marginLeft: '5px' }}size={20} onClick={logout}/></span>
            : <Link to="/login">My account</Link>
          }
        </li>
      </ul>
    </HeaderStyled>
  );
}

export default Header;