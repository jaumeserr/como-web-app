import styled from "styled-components";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';

import {
  listCollection,
  getObjectsByCategory,
  filterProductsByOrder,
} from "../services/db";

import ProductFilterBar from "../components/ProductFilterBar";
import ProductsListView from "../components/ProductsListView";
import ProductsGridView from "../components/ProductsGridView";
import CategoryMenu from "../components/CategoryMenu";
import CategoryLayout from "../components/layouts/CategoryLayout";

const CategoriesLayoutStyled = styled.section`
  padding: 20px;
  display: flex;
  width: 100%;

  aside {
    margin-right: 10px;
  }

  section {
    flex-grow: 1;
  }
`;

const HomePage = (props) => {
  const [products, setProducts] = useState([]);
  const category = props.match.params.category;
  const [showProducts, setshowProducts] = useState("grid");

  const fetchProducts = async (category) => {
    if (category) {
      const result = await getObjectsByCategory("products", category);
      const { success, data } = result;
      if (success) {
        return setProducts(data);
      }
    } else {
      const result = await listCollection("products");
      const { success, data } = result;
      if (success) {
        return setProducts(data);
      }
    }
  };

  const filterProducts = async (product, field, order) => {
    const result = await filterProductsByOrder(product, field, order);
    const { success, data } = result;
    if (success) {
      return setProducts(data);
    }
  };

  const selectFilter = (value) => {
    const split = value.split("_");
    filterProducts("products", split[0], split[1]);
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const toggleShowGrid = () => {
    setshowProducts("grid");
  };

  const toggleShowList = () => {
    setshowProducts("list");
  };

  return (
    <CategoryLayout>
      <ToastContainer />
      <CategoriesLayoutStyled>
        <aside>
          <CategoryMenu />
        </aside>
        <section>
          <ProductFilterBar
            toggleShowGrid={toggleShowGrid}
            toggleShowList={toggleShowList}
            handleChange={selectFilter}
          />
          {showProducts === "grid" ? (
            <ProductsGridView products={products} />
          ) : (
            <ProductsListView products={products} />
          )}
        </section>
      </CategoriesLayoutStyled>
    </CategoryLayout>
  );
};

export default HomePage;
