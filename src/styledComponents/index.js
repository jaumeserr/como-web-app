import styled from 'styled-components';

export const InputStyled = styled.input`
  border: 1px solid var(--principal);
  padding: 13px 15px;
  margin-bottom: 15px;
  outline-color: var(--principal);
  border-radius: 4px;
  width: 100%;
`

export const ButtonStyled = styled.button`
  padding: 15px;
  background-color: var(--tertiary);
  color: var(--white);
  border: 1px solid var(--secondary);
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;

  :hover {
    background-color: var(--white);
    color: var(--principal);
    border: 1px solid var(--primary);
  }

  a {
    color: var(--white);
    text-decoration: none;
    display: block;
    :hover {
      color: var(--black);
    }
  }
`

export const FormLayoutStyled = styled.section`
  width: 100%;
  padding: 30px;

  @media (min-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }
`