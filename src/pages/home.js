import styled from 'styled-components';

import { listCollection } from '../services/db';
import { useState, useEffect } from 'react';
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



const HomePage = () => {
  const [products, setProducts] = useState([])
  // const [sort, setSort] = useState([])

  const getProducts = async () => {
    const result = await listCollection('products');
    const { success, data } = result;
    if(success) {
      return setProducts(data)
    }
  }

  const sortByAlphabetAtoZ = () => {
    return products.sort((a,b) => (a.price > b.price) ? 1 : -1);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <MainLayout>
      <CategoriesLayoutStyled>
        <aside><CategoryList /></aside>
        <section>
          <CardListMenu products={products}/>
          <CardList products={products} />
        </section>
      </CategoriesLayoutStyled>
    </MainLayout>
  )
}

export default HomePage
