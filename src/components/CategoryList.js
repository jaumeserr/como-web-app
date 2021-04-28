import styled from 'styled-components';

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
  return (
    <CategoryMenuStyled>
      <Flex direction="row" align="center">
        <p>1</p>
        <h2>CATEGORIES</h2>
      </Flex>
      <ul>
        <li>Botones</li>
        <li>Hombreras</li>
        <li>Cremalleras</li>
        <li>Pasamanerias</li>
        <li>Gomas</li>
      </ul>  
    </CategoryMenuStyled>
  )
}

export default CategoryList
