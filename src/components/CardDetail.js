import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getObjectById } from "../services/db";
import { Button, Spacer } from "./UI";
import { addProduct } from "../redux/cart/cartActions";
import MainLayout from "./layouts/MainLayout";
import PageHeading from "./PageHeading";
import Breadcrum from "./Breadcrum";

const CardDetailContent = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
`

const ButtonBack = styled(Button)`
  cursor: pointer;
  position: absolute;
  top: -18px;
  left: 20px;
`;

const CardDetailStyled = styled.section`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: 5px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  div:first-child {
    img {
      padding: 20px;
      width: 300px;
    }
  }

  .card-detail__info {
    padding: 20px 20px 30px 0;
  }

  .card-detail__name {
    font-size: 30px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.tertiary};
  }

  .card-detail__price {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .card-detail__title {
    font-size: 25px;
    display: block;
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    margin-bottom: 5px;
    padding-bottom: 5px;
    font-weight: 700;
  }

  .card-detail__counter {
    margin-top: 5px;
    margin-bottom: 10px;

    span {
      padding: 0 10px;
      font-size: 20px;
    }
  }

  .card-detail__buttons {
    display: flex;
    margin-bottom: 20px;
  }
`;

const AddCardButtonStyled = styled(Button)`
  margin: 0 2px;
`;

const CardDetail = (props) => {
  const [product, setProduct] = useState("");
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cardData.cartItems);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const params = useParams();
  console.log("🚀 ~ file: CardDetail.js ~ line 100 ~ CardDetail ~ params", params)

  const fetchProduct = async (productId) => {
    const { success, data } = await getObjectById("products", productId);
    if (success) {
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct(productId); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoBack = () => {
    props.history.goBack();
  };

  const addToCart = () => {
    if (user) {
      dispatch(addProduct(product));
    } else {
      history.push("/login");
    }
  };

  const { id, image, name, price, description, units } = product;

  const isProductInCart =
    cart.findIndex((cartProduct) => cartProduct.id === id) >= 0;

  return (
    <MainLayout>
      <div>
        <PageHeading title="Product detail"/>
        <Breadcrum />
        <Spacer />
        <CardDetailContent >
          <ButtonBack onClick={handleGoBack}>GO BACK</ButtonBack>
          <CardDetailStyled>
            <div>
              <img src={image} alt={name} />
            </div>
            <div className="card-detail__info">
              <p className="card-detail__name">{name}</p>
              <p className="card-detail__price">
                {price}
                <span style={{ fontSize: 18 }}> € / {units}</span>
              </p>
              <div className="card-detail__buttons">
                <AddCardButtonStyled
                  isProductInCart={isProductInCart}
                  onClick={addToCart}
                >
                  {isProductInCart && user ? "PRODUCT ADDED!" : "ADD TO CART"}
                </AddCardButtonStyled>
                <Button>FAV</Button>
              </div>
              <p className="card-detail__title">Description</p>
              <p>{description}</p>
            </div>
          </CardDetailStyled>
        </CardDetailContent>
      </div>
    </MainLayout>
  );
};

export default CardDetail;
