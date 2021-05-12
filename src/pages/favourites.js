import styled from "styled-components";
import { useSelector } from "react-redux";

import CartLayout from "../components/layouts/CartLayout";
import PageHeading from "../components/PageHeading";
import CardFavs from "../components/CardFavs";
import { Flex, Spacer, StyledLink } from "../components/UI";

const EmptyCart = styled.div`
  text-align: center;
  padding: 200px 0;
  p {
    padding-bottom: 30px;
    font-size: 20px;
  }
`;

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.user.favourites)

  return (
    <CartLayout>
      <Spacer />
      <PageHeading title="Favourites" />
      {favourites.length > 0 ? (
        <Flex justify="flex-start">
          {favourites.map((product, index) => (
            <CardFavs key={index} product={product} />
          ))}
        </Flex>
      ) : (
        <>
          <EmptyCart>
            <p>There's no favourites, click on the heart!!</p>
            <StyledLink to="/">Add Favourites</StyledLink>
          </EmptyCart>
        </>
      )}
      <Spacer />
    </CartLayout>
  );
};

export default FavouritesPage;