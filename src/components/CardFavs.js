import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "./UI";
import { createObjectWithId } from "../services/db";
import { setUser } from "../redux/user/userActions";
import { addProduct } from "../redux/cart/cartActions";
import { addFavs } from "../redux/favs/favsActions";

const CardFavsStyled = styled.article`
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: calc(25% - 10px);
  overflow: hidden;
  margin: 10px 5px;

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
  margin: 2px;
`;

const CardFavs = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, name, price, shortDescription, units } = product;
  const cart = useSelector((state) => state.cardData.cartItems);
  const user = useSelector((state) => state.user);

  const history = useHistory();

  const params = useParams();

  const saveToFavs = async () => {
    if (user) {
      const isFavourite = user.favourites.includes(id);

      const newFavourites = isFavourite
        ? user.favourites.filter((favourite) => favourite !== id)
        : [...user.favourites, id];

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
        dispatch(addFavs(product));
      }
    } else {
      history.push("/login");
    }
  };

  const addToCart = () => {
    if (user) {
      dispatch(addProduct(product));
      notify();
    } else {
      history.push("/login");
    }
  };

  // when create a new User, this part crash
  const isFavourite = user ? user.favourites.includes(product.id) : null;

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
    <CardFavsStyled>
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
      <AddCardButtonStyled
          isProductInCart={isProductInCart}
          onClick={addToCart}
        >
          REMOVE
        </AddCardButtonStyled>
    </CardFavsStyled>
  );
};

export default CardFavs;