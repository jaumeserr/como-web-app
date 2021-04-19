import Footer from "../components/Footer"
import Header from "../components/Header"
import styled from 'styled-components';

const ContentStyled = styled.main`
  height: calc(100vh - 129px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainLayout = ({children}) => {
  return(
    <div>
      <Header />
      <ContentStyled>
        {children}
      </ContentStyled>
      <Footer />
    </div>
  );
}

export default MainLayout;