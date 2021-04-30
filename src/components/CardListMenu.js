import styled from 'styled-components';

import ListView from '../assets/list.svg';
import GridView from '../assets/block.svg';
import { Flex } from './UI';

const CardListMenuStyled = styled.div`
  padding: 10px;
  display: flex;
  border-radius: 3px;
  justify-content: space-between;
  background-color: #f8f8f8;
  width: 100%;
  border: 1px solid #e8e8e8;
`

const ButtonView = styled.button`
  padding: 6px;
  border: 1px solid #e8e8e8;
  margin-right: 10px;
  border-radius: 3px;
  background-color: white;
  img {
    display: block;
  }
`

const SelectStyled = styled.select`
  height: 36px;
  border-radius: 3px;
  border: 1px solid #e8e8e8;
  padding: 0 10px;
  background-color: white;
  margin-left: 10px;
  width: 100px;
  outline: none;
`



const CardListMenu = ({ handleChange, toggleShowGrid, toggleShowList }) => {
  
  return (
    <CardListMenuStyled>
      <Flex align="center">
        <ButtonView onClick={toggleShowGrid}>
          <img src={GridView} alt="GridView" />
        </ButtonView>
        <ButtonView onClick={toggleShowList}>
          <img src={ListView} alt="ListView" />
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
    </CardListMenuStyled>
  );
}

export default CardListMenu;
