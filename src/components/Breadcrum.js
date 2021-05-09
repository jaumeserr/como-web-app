import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { Flex } from "./UI";

const BreadcrumStyled = styled.section`
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  list-style: none;
  span {
    padding: 0 10px;
  }
  li a {
    text-decoration: none;
    color: var(--black);
    :hover {
      text-decoration: underline;
    }
  }
`

const Breadcrum = (props) => {
  const params = useParams();
  const history = useHistory();
  console.log("🚀 ~ file: Breadcrum.js ~ line 26 ~ Breadcrum ~ history", history)
  console.log("🚀 ~ file: Breadcrum.js ~ line 25 ~ Breadcrum ~ params", params)
  
  
  return (
    <>
      <BreadcrumStyled>
      <li>
        <Link to={'/'}>
          <Flex>
            <FaHome style={{ marginRight: '5px'}} size={20} /> home      
          </Flex>
        </Link>
      </li>
      <span>/</span>
      <li>
        <Link to={history.location}>
          {params.category}
        </Link>
      </li>
      </BreadcrumStyled>
    </>
  );
}

export default Breadcrum;