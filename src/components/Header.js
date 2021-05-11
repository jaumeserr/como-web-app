import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { logout } from "../services/auth";
import { IoLogOutOutline } from "react-icons/io5";

const HeaderStyled = styled.header`
  height: 60px;
  background-color: ${(props) => props.theme.color.fourth};

  ul {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
  }

  li {
    padding: 0 20px;
    border-right: 1px solid black;

    &:last-child {
      border-right: none;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  .addproduct {
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
`;

const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cardData.cartItems);

  return (
    <HeaderStyled>
      <ul>
        <li className="logo">
          <Link to="/">COMO MATARÓ</Link>
        </li>
        {
          user && user.email === 'admin@como-moda.com'
          ? <li className="addproduct"><Link to="/addproduct">Add Product</Link></li>
          : ''
        }
        <li className="favs">
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <Link to="/cart" className="cart">
            {
              user
              ? `Cart (${cart.length})`
              : 'Cart'
            }
            
          </Link>
        </li>
        <li>
          {user ? (
            <span className="user">
              {user.name}{" "}
              <IoLogOutOutline
                style={{ cursor: "pointer", marginLeft: "5px" }}
                size={20}
                onClick={logout}
              />
            </span>
          ) : (
            <Link to="/login">My account</Link>
          )}
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
