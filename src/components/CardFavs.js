import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "./UI";
import { createObjectWithId } from "../services/db";
import { setUser } from "../redux/user/userActions";
import { useEffect } from "react";

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
  const user = useSelector((state) => state.user);

  useEffect(() => {

  })
  
  const removeFromFavs = async () => {
    const removedItem = user.favourites.filter((favourite) => favourite.id !== id);

    const userToSave = {
      ...user,
      favourites: removedItem
    };

    const { success } = await createObjectWithId(
      "profiles",
      userToSave,
      user.id
    );

    if (success) {
      dispatch(setUser(userToSave));
    }
  };

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
      <AddCardButtonStyled onClick={removeFromFavs}>
        REMOVE
      </AddCardButtonStyled>
    </CardFavsStyled>
  );
};

export default CardFavs;
