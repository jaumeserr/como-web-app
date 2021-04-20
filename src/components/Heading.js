import styled from 'styled-components';

const HeadingStyled = styled.h1`
  font-size: 60px;
  text-align: center;
  margin-bottom: 40px;
`

const Heading = ({ title }) => {
  return(
    <HeadingStyled>
      {title}
    </HeadingStyled>
  );
}

export default Heading;