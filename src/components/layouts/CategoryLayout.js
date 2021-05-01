import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import CardDetail from '../CardDetail';
import CategoryList from '../CategoryMenu';
import CardList from '../CardList';
import Home from '../pages';

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
          <Home />
        </section>
      </CategoryLayoutStyled>
      <Footer />
    </div>
  );
}

export default CategoryLayout;