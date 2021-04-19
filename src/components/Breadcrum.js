import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadcrumStyled = styled.section`
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  list-style: none;
  span {
    padding: 0 10px;
  }
  li a {
    text-decoration: none;
    color: black;
    :hover {
      text-decoration: underline;
    }
  }
`

const Breadcrum = props => {
  const { opt1, opt2, link1, link2} = props
  console.log(props)
  return(
    <BreadcrumStyled>
      <li><Link to={link1}>{opt1}</Link></li>
      <span>/</span>
      <li><Link to={link2}>{opt2}</Link></li>
    </BreadcrumStyled>
  );
}

export default Breadcrum;