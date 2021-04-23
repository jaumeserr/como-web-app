import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardDetail from '../components/CardDetail';
import CategoryList from '../components/CategoryList';
import CardList from '../components/CardList';

const CategoryLayoutStyled = styled.main`
  height: calc(100vh - 124px);
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  aside {

  }

  section {
    padding-left: 10px;
    flex: 1;
  }
`

const CategoryLayout = () => {
  return(
    <div>
      <Header />
      <CategoryLayoutStyled>
        <aside>
          <CategoryList />
        </aside>
        <section>
          <CardList />
          {/* <CardDetail /> */}
        </section>
      </CategoryLayoutStyled>
      <Footer />
    </div>
  );
}

export default CategoryLayout;