import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createObjectWithId } from '../services/db';
import { setUser } from '../redux/user/userActions'

import { addProduct } from '../redux/cart/cartActions';
import { addFavs } from '../redux/favs/favsActions';
import { Button, Flex, StyledLink } from './UI';
import { BsHeart, BsSearch } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const CardStyled = styled.article`
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 10px);
  overflow: hidden;
  position: relative;
  margin-top: 10px;

  .card__info {
    padding: 10px;
  }
  
  .card__name {
    font-size: 18px;
    color: ${props => props.theme.color.tertiary};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .card__price {
    font-size: 25px;
    color: ${props => props.theme.color.tertiary};
    margin-bottom: 10px;
  }
`

const AddCardButtonStyled = styled(Button)`
  flex: 1;
  margin: 0 2px;
`

const Card = (product) => {
  const dispatch = useDispatch();
  const { image, name, price, shortDescription, units } = product;
  const user = useSelector(state => state.user)
  const history = useHistory();

  const params = useParams();
  const { category } = params;

  const saveToFavs = async () => {
    if (user) {
      const isFavourite = user.favourites.includes(product.id)

      const newFavourites = isFavourite
        ? user.favourites.filter(favourite => favourite !== product.id)
        : [...user.favourites, product.id]

      const userToSave = {
        ...user,
        favourites: newFavourites
      }

      const { success } = await createObjectWithId('profiles', userToSave, user.id)
      if (success) {
        dispatch(setUser(userToSave))
        dispatch(addFavs(product))
      }
    } else {
      history.push('/login')
    }
  }

  const handleAddToCard = (product) => {
    dispatch(addProduct(product))
  }

  // const isFavourite = user.favourites.includes(product.id)

  return (
    <CardStyled>
      <div style={{
        backgroundImage: `url(${image})`,
        height: '250px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__shortdesc">{shortDescription}</p>
        <p className="card__price">{price}<span style={{ fontSize: 16 }}>€ / {units}</span></p>
      </div>
      <Flex direction='row' justify="center" align="center" style={{ padding: '2px' }}>
        <Button>
          <BsHeart size={20} onClick={saveToFavs} />
        </Button>

        {/* {
          isFavourite
          ? <BsHeartFill size={20} onClick={saveToFavs} fill='red' />
          : <BsHeart size={20} onClick={saveToFavs} />
        } */}
        <AddCardButtonStyled onClick={() => handleAddToCard(product)}>
          ADD TO CART
        </AddCardButtonStyled>
        <StyledLink to={`/${category}/${product.id}`}>
          <BsSearch size={20} />
        </StyledLink>
      </Flex>
    </CardStyled>
  );
}

export default Card;