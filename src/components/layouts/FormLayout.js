import styled from 'styled-components';

import Footer from "../Footer"
import Header from "../Header"

const ContentStyled = styled.main`
  height: calc(100vh - 66px - 59px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const FormLayout = ({ children }) => {
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

export default FormLayout;