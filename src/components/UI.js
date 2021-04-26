import styled from 'styled-components';

const Spacer = styled.div`
  height: ${props => {
    if (props.height) {
      return props.height;
    } else {
      return '20px';
    }
  }};
`

const Button = styled.a`
  background-color: ${props => props.theme.color.tertiary};
  border: 1px solid ${props => props.theme.color.primary};
  color: white;
  text-align: center;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.theme.color.fourth};
    color: black;
  }
`

export { Spacer, Button }