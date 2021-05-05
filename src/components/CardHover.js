import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';
import { BsHeartFill, BsSearch } from 'react-icons/bs';
import { createObjectWithId } from '../services/db';


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

  const params = useParams();
  const { category } = params;

  const saveToFavs = async () => {
    const newFav = { ...user, favourites: [product.id] }
    const { success } = await createObjectWithId('profiles', newFav, user.id)
    if (success) {
      console.log('creado')
    }
  }

  return(
    <CardHoverStyled>
      <li>
        {/* <BsHeartFill size={20} onClick={() => saveToFavs(product.id)} /> */}
        <BsHeartFill size={20} onClick={saveToFavs} />
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