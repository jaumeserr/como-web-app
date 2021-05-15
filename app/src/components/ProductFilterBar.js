import styled from 'styled-components';

const ProductFilterBarStyled = styled.div`
  padding: 10px;
  display: flex;
  border-radius: 3px;
  justify-content: flex-end;
  background-color: ${props => props.theme.color.box_bg};
  width: 100%;
  border: 1px solid ${props => props.theme.color.border};
`

const SelectStyled = styled.select`
  height: 36px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.color.border};
  padding: 0 10px;
  background-color: ${props => props.theme.color.input_bg};
  margin-left: 10px;
  outline: none;
`

const ProductFilterBar = ({ handleChange }) => {
  return (
    <ProductFilterBarStyled>
      <div>
        Sort by:
        <SelectStyled onChange={(e) => handleChange(e.target.value)}>
          <option value="name_asc">A to Z</option>
          <option value="name_desc">Z to A</option>
          <option value="price_asc">Price ascendent</option>
          <option value="price_desc">Price descendent</option>
        </SelectStyled>
      </div>
    </ProductFilterBarStyled>
  );
}

export default ProductFilterBar;
