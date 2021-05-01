import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BsLayers } from 'react-icons/bs';

import { Flex } from './UI';
import { listCollection } from '../services/db';

const CategoryMenuStyled = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background-color: #f8f8f8;
  overflow: hidden;
  
  h2 {
    margin-left: 5px;
    font-size: 20px;
  } 
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.tertiary};
  
  li {
    padding: 10px 10px 10px 20px
  }
  li:hover {
    background-color: ${props => props.theme.color.secondary}
  }
`

const CategoryMenu = () => {
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
      <Flex direction="row" align="center" style={{ padding: '10px' }}>
        <BsLayers size={20} />
        <h2>CATEGORIES</h2>
      </Flex>
      <ul>
        {
          categories.map(({ name, path }, i) => (
            <LinkStyled to={path}>
              <li key={`${name}-${i}`}>{name}</li>
            </LinkStyled>
          ))
        }
      </ul>  
    </CategoryMenuStyled>
  )
}

export default CategoryMenu
