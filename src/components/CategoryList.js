import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { listCollection } from '../services/db';
import { Link } from 'react-router-dom';

import { Flex } from './UI';

const CategoryMenuStyled = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background-color: #f8f8f8;
  overflow: hidden;
  
  h2 {
    border-bottom: 1px solid var(--principal);
    background-color: var(--principal);
    color: var(--white);
    font-weight: 700;
  }
  
  ul {
    list-style: none;

    li {
      padding: 10px;
      cursor: pointer;

      :hover {
        background-color: red;
      }
    }
  }
`

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchListCategories = async () => {
    const result = await listCollection('categories');
    const { success, data } = result;
    if(success) {
      return setCategories(data)
    }
  }

  useEffect(() => {
    fetchListCategories();
  }, [])

  return (
    <CategoryMenuStyled>
      <Flex direction="row" align="center">
        <p>1</p>
        <h2>CATEGORIES</h2>
      </Flex>
      <ul>
        {
          categories.map(({ name, path }, i) => (
            <Link to={path}>
              <li key={`${name}-${i}`}>{name}</li>
            </Link>
          ))
        }
      </ul>  
    </CategoryMenuStyled>
  )
}

export default CategoryList
