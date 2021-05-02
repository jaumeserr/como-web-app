import styled from 'styled-components';

import Footer from "../Footer"
import Header from "../Header"

const FormLayoutStyled = styled.main`
  /* height: calc(100vh - 64px - 59px); */
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
      <Header products={products}/>
      <ContentStyled>
        {children}
      </ContentStyled>
      <Footer />
    </div>
  );
}

export default FormLayout;