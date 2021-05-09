import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

const CartLayoutSyled = styled.main`
  min-height: calc(100vh - 120px);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
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
