import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BsLayers } from 'react-icons/bs';

import { Flex } from './UI';
import { listCollection } from '../services/db';

const CategoryMenuStyled = styled.div`
  border: 1px solid ${props => props.theme.color.border};
  border-radius: 3px;
  background-color: #f8f8f8;
  overflow: hidden;
  width: 180px;
  
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
      <Flex direction="row" align="center" justify="center" style={{ padding: '10px 0px' }}>
        <BsLayers size={20} />
        <h2>CATEGORIES</h2>
      </Flex>
      <ul>
        <LinkStyled to='/'>
          <li>All</li>
        </LinkStyled>
        {
          categories.map(({ name, path }, index) => {
            console.log(`${name}-${index}`)
            return (
            <LinkStyled to={path}>
              <li key={`${name}-${index}`}>{name}</li>
            </LinkStyled>
            )
          })
        }
      </ul>  
    </CategoryMenuStyled>
  )
}

export default CategoryMenu
