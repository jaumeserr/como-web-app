import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
  border: 2px solid var(--lightGray);
  padding: 13px 15px;
  margin-bottom: 15px;
  outline-color: var(--black);
`

export const ButtonStyled = styled.button`
  padding: 15px 30px;
  background-color: var(--black);
  color: var(--white);
  border: 1px solid var(--black);
  font-weight: 700;
  /* transition: all 500ms cubic-bezier(0.77, 0, 0.175,1); */
  cursor: pointer;

  a{
    color: inherit;
    text-decoration: none;
    display: block;
  }

  :hover {
  background-color: var(--white);
  color: var(--black);
  }

  ${props => props.primary && css`
  background-color: var(--white);
  color: var(--black);
  border: 1px solid #e8e8e8;
  `}
`