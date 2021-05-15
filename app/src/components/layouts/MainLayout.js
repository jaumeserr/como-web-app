import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

const ContentStyled = styled.main`
  min-height: calc(100vh - 120px);
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <ContentStyled>{children}</ContentStyled>
      <Footer />
    </div>
  );
};

export default MainLayout;
