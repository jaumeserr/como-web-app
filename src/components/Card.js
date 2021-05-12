import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsHeart, BsSearch, BsHeartFill } from "react-icons/bs";

import { Button, Flex, StyledLink } from "./UI";
import { createObjectWithId } from "../services/db";
import { setUser } from "../redux/user/userActions";
import { addProduct } from "../redux/cart/cartActions";

const CardStyled = styled.article`
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 10px);
  overflow: hidden;
  margin: 5px;

  .card__info {
    padding: 10px;
  }

  .card__name {
    font-size: 18px;
    color: ${(props) => props.theme.color.tertiary};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .card__price {
    font-size: 25px;
    color: ${(props) => props.theme.color.tertiary};
    margin-bottom: 10px;
  }
`;

const AddCardButtonStyled = styled(Button)`
  flex: 1;
  margin: 0 2px;
`;

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, name, price, shortDescription, units } = product;
  const cart = useSelector((state) => state.cardData.cartItems);
  const basket = useSelector((state) => state.cardData);
  const user = useSelector((state) => state.user);

  const history = useHistory();

  const params = useParams();
  const { category = 'all' } = params;

  const saveToFavs = async () => {
    if (user) {
      
      const isFavourite = user.favourites.find((favourite) => favourite.id === id);

      const newFavourites = isFavourite
        ? user.favourites.filter((favourite) => favourite.id !== id)
        : [...user.favourites, product];

      const userToSave = {
        ...user,
        favourites: newFavourites,
      };

      const { success } = await createObjectWithId(
        "profiles",
        userToSave,
        user.id
      );
      if (success) {
        dispatch(setUser(userToSave));
      }
    } else {
      history.push("/login");
    }
  };

  const addToCart = () => {
    if (user) {
      dispatch(addProduct(basket, product));
      notify();
    } else {
      history.push("/login");
    }
  };

  const isFavourite = user && user.favourites.find((favourite) => favourite.id === id);

  const isProductInCart =
    cart.findIndex((cartProduct) => cartProduct.id === id) >= 0;

  const notify = () =>
    toast.success(
      `${(product.name).toUpperCase()} ADDED!`,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  return (
    <CardStyled>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "250px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <p className="card__shortdesc">{shortDescription}</p>
        <p className="card__price">
          {price}
          <span style={{ fontSize: 16 }}>€ / {units}</span>
        </p>
      </div>
      <Flex
        direction="row"
        justify="center"
        align="center"
        style={{ padding: "2px" }}
      >
        {isFavourite ? (
          <Button>
            <BsHeartFill size={20} onClick={saveToFavs} fill="red" />
          </Button>
        ) : (
          <Button>
            <BsHeart size={20} onClick={saveToFavs} />
          </Button>
        )}
        <AddCardButtonStyled
          isProductInCart={isProductInCart}
          onClick={addToCart}
        >
          {isProductInCart && user ? "PRODUCT ADDED!" : "ADD TO CART"}
        </AddCardButtonStyled>
        <StyledLink to={`/${category}/${id}`}>
          <BsSearch size={20} />
        </StyledLink>
      </Flex>
    </CardStyled>
  );
};

export default Card;
