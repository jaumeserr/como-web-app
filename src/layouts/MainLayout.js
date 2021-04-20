import Footer from "../components/Footer"
import Header from "../components/Header"
import styled from 'styled-components';
import Card from "../components/Card";

const ContentStyled = styled.main`
  height: calc(100vh - 129px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const INFO_CARD = [
  {
    id: 1,
    price: 12,
    name: 'Cremallera',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt nunc at sem convallis consequat. Fusce dictum turpis vitae vehicula vestibulum.',
    shortDesc: 'Lorem Ipsum',
    color: ['black', 'white', 'green'],
    img: 'https://images-na.ssl-images-amazon.com/images/I/71gVzpeo09L._AC_SL1000_.jpg'
  },
  {
    id: 2,
    price: 24,
    name: 'Botón',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt nunc at sem convallis consequat. Fusce dictum turpis vitae vehicula vestibulum.',
    shortDesc: 'Lorem Ipsum',
    color: ['black', 'white', 'green'],
    img: 'https://images-na.ssl-images-amazon.com/images/I/71gVzpeo09L._AC_SL1000_.jpg'
  },
  {
    id: 4,
    price: 50,
    name: 'Botón',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt nunc at sem convallis consequat. Fusce dictum turpis vitae vehicula vestibulum.',
    shortDesc: 'Lorem Ipsum',
    color: ['black', 'white', 'green'],
    img: 'https://images-na.ssl-images-amazon.com/images/I/71gVzpeo09L._AC_SL1000_.jpg'
  }
]

const MainLayout = ({children}) => {
  return(
    <div>
      <Header />
      <ContentStyled>
        {/* {
          INFO_CARD.map(({ id, price, name, shortDesc, img }) => (
            <Card
              key={id}
              price={price}
              name={name}
              shortDesc={shortDesc}
              img={img}
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