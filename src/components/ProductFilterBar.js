import styled from 'styled-components';
import { BsGrid, BsList } from 'react-icons/bs';

import { Flex } from './UI';

const ProductFilterBarStyled = styled.div`
  padding: 10px;
  display: flex;
  border-radius: 3px;
  justify-content: space-between;
  background-color: ${props => props.theme.color.box_bg};
  width: 100%;
  border: 1px solid ${props => props.theme.color.border};
`

const ButtonView = styled.button`
  padding: 6px;
  border: 1px solid ${props => props.theme.color.border};
  margin-right: 10px;
  border-radius: 3px;
  background-color: ${props => props.theme.color.input_bg};
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

const ProductFilterBar = ({ handleChange, toggleShowGrid, toggleShowList }) => {
  
  return (
    <ProductFilterBarStyled>
      <Flex align="center">
        <ButtonView onClick={toggleShowGrid}>
          <BsGrid size={20} />
        </ButtonView>
        <ButtonView onClick={toggleShowList}>
          <BsList size={20} />
        </ButtonView>
      </Flex>
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
