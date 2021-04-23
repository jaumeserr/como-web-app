import styled from 'styled-components';

const CategoryMenuStyled = styled.div`
  border: 1px solid var(--principal);
  border-radius: 5px;
  
  div {
    border-bottom: 1px solid var(--principal);
    padding: 10px 20px;
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
        background-color: var(--secondary);
      }
    }
  }
`

const CategoryList = () => {
  return (
    <CategoryMenuStyled>
      <div>ALL CATEGORIES</div>
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
