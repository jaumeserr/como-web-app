import styled from 'styled-components';

const PageHeadingStyled = styled.h1`
  font-size: 60px;
  text-align: center;
  margin-bottom: 40px;
`

const PageHeading = ({ title }) => {
  return(
    <PageHeadingStyled>
      {title}
    </PageHeadingStyled>
  );
}

export default PageHeading;