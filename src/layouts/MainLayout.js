import Footer from "../components/Footer"
import Header from "../components/Header"
import styled from 'styled-components';
import Card from "../components/Card";

import INFO_CARD from '../db.js';

const ContentStyled = styled.main`
  height: calc(100vh - 129px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const MainLayout = ({children}) => {
  return(
    <div>
      <Header />
      <ContentStyled>
    
        {/* {
          INFO_CARD.map(({ id, price, name, shortDesc, img, unities }) => (
            <Card
              key={id}
              price={price}
              name={name}
              shortDesc={shortDesc}
              img={img}
              unities={unities}
            />
          ))
        } */}
        {children}
      </ContentStyled>
      <Footer />
    </div>
  );
}

export default MainLayout;