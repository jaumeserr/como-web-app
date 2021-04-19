import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
  border: 2px solid #e8e8e8;
  padding: 13px 15px;
  margin-bottom: 15px;
  outline-color: black;
`

export const ButtonStyled = styled.button`
  padding: 15px 30px;
  background-color: black;
  color: white;
  border: 1px solid black;
  font-weight: 700;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175,1);
  cursor: pointer;

  a{
    color: inherit;
    text-decoration: none;
    display: block;
  }

  :hover {
  background-color: white;
  color: black;
  }

  ${props => props.primary && css`
  background-color: white;
  color: black;
  border: 1px solid #e8e8e8;
  `}
`