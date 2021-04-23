import styled from 'styled-components';

import BlockIco from './BlockIco.js';
import ListIco from './ListIco.js';

const CardListMenuStyled = styled.div`
  border-bottom: 1px solid var(--primary);
  padding: 0 15px 10px 15px;
  display: flex;
  justify-content: space-between;
`

const ButtonList = styled.button`
  padding: 7px;
  border: 1px solid var(--primary);
  margin-right: 10px;
  border-radius: 3px;
  background-color: #efefef;
`

const SelectStyled = styled.select`
  background-color: red;
  height: 36px;
  border-radius: 3px;
  border: 1px solid var(--primary);
  padding: 0 10px;
  background-color: #efefef;
  font-size: 16px;
  margin-left: 10px;
  width: 100px;
`

function CardListMenu() {
  return (
    <CardListMenuStyled>
      <div>
        <ButtonList>
          <BlockIco />
        </ButtonList>
        <ButtonList>
          <ListIco />
        </ButtonList>
      </div>
      <div>
        Sort by:
        <SelectStyled>
          <option>A to Z</option>
          <option>Z to A</option>
          <option>Price ascendent</option>
          <option>Price descendent</option>
        </SelectStyled>
      </div>
    </CardListMenuStyled>
  )
}

export default CardListMenu
