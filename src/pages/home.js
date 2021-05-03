import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { listCollection, getObjectsByCategory } from '../services/db';

import MainLayout from '../components/layouts/MainLayout';
import ProductFilterBar from '../components/ProductFilterBar';
import ProductsListView from '../components/ProductsListView';
import ProductsGridView from '../components/ProductsGridView';
import CategoryMenu from '../components/CategoryMenu';

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
console.log("🚀 ~ file: home.js ~ line 29 ~ HomePage ~ props", props)
  const [products, setProducts] = useState([])
  const category = props.match.params.category;
  const [showProducts, setshowProducts] = useState('grid');

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

  const toggleShowGrid = () => {
    setshowProducts('grid');
  }

  const toggleShowList = () => {
    setshowProducts('list');
  }

  return (
    <MainLayout>
      <CategoriesLayoutStyled>
        <aside>
          <CategoryMenu />
        </aside>
        <section>
          <ProductFilterBar
            toggleShowGrid={toggleShowGrid}
            toggleShowList={toggleShowList}
          />
          {
            showProducts === 'grid'
            ? <ProductsGridView products={products} />
            : <ProductsListView products={products} />
          }
        </section>
      </CategoriesLayoutStyled>
    </MainLayout>
  )
}

export default HomePage;
