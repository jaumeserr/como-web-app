import styled from 'styled-components';

import SearchIcon from '../assets/search.svg';
import FavIcon from '../assets/favs.svg';


const CardHoverStyled = styled.ul`
  position: absolute;
  border: 1px solid #e8e8e8;
  box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.08);
  right: 10px;
  top: 10px;
  list-style: none;
  border-radius: 4px;

  li {
    padding: 12px;

    img {
      display: block;
      width: 20px;
    }

    :last-child {
      border-top: 1px solid #e8e8e8;
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
        <img
          src={SearchIcon}
          alt="Search"
          style={{color: "red"}}
        />
        </li>
    </CardHoverStyled>
  );
}

export default CardHover;