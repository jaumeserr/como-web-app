import styled from 'styled-components';
import { Link } from "react-router-dom";

const Spacer = styled.div`
  height: ${props => {
    if (props.height) {
      return props.height;
    }
    return '20px';
  }};
`

const Button = styled.button`
  background-color: ${props => props.theme.color.tertiary};
  border: 1px solid ${props => props.theme.color.primary};
  color: white;
  text-align: center;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.theme.color.fourth};
    color: black;
  }
`

const StyledLink = styled(Link)`
  background-color: ${props => props.theme.color.tertiary};
  border: 1px solid ${props => props.theme.color.primary};
  color: white;
  text-align: center;
  outline: none;
  cursor: pointer;
  display: block;
  width: ${props => {
    if(props.width) {
      return props.width;
    }
    return '100%'
  }};
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.theme.color.fourth};
    color: black;
  }
`

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: wrap;
`

export { Spacer, Button, StyledLink, Flex }