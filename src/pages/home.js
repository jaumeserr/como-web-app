import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { listCollection, getObjectsByCategory } from '../services/db';

import MainLayout from '../components/layouts/MainLayout';
import CategoryList from '../components/CategoryList';
import CardListMenu from '../components/CardListMenu';
import CardList from '../components/CardList';

const CategoriesLayoutStyled  = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;

  aside {
    margin-right: 10px;
  }
  
  section {
    flex-grow: 1;
  }
`

const HomePage = (props) => {
  const [products, setProducts] = useState([])
  const category = props.match.params.category;
  
  const fetchProducts = async (category) => {
    if (category) {
      const result = await getObjectsByCategory('products', category);
      const { success, data } = result;
      if(success) {
        return setProducts(data)
      }
    } else {
      const result = await listCollection('products');
      const { success, data } = result;
      if(success) {
        return setProducts(data)
      }
    }
  }

  useEffect(() => {
    fetchProducts(category);
  }, [category])

  return (
    <MainLayout>
      <CategoriesLayoutStyled>
        <aside><CategoryList /></aside>
        <section>
          <CardListMenu />
          <CardList products={products} />
        </section>
      </CategoriesLayoutStyled>
    </MainLayout>
  )
}

export default HomePage;
