import styled from 'styled-components';

const FooterStyled = styled.footer`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid var(--lightGray);
`

const Footer = () => {
  return(
    <FooterStyled>
      &copy; 2021 COMO. All right reserved.
    </FooterStyled> 
  );
}

export default Footer;