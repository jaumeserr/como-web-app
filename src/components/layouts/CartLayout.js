import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

const CartLayoutSyled = styled.main`
  height: calc(100vh - 60px - 59px);
  max-width: 1200px;
  margin: 0 auto;
`;

const CartLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <CartLayoutSyled>{children}</CartLayoutSyled>
      <Footer />
    </div>
  );
};

export default CartLayout;
