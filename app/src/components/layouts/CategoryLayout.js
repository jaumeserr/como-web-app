import styled from 'styled-components';

import Footer from "../Footer"
import Header from "../Header"

const ContentStyled = styled.main`
  min-height: calc(100vh - 120px);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

const CategoryLayout = ({ children }) => {
  return(
    <div>
      <Header/>
      <ContentStyled>
        {children}
      </ContentStyled>
      <Footer />
    </div>
  );
}

export default CategoryLayout;