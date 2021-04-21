import styled from 'styled-components';

const FooterStyled = styled.footer`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid var(--principal);
  background-color: var(--secondary);
`

const Footer = () => {
  return(
    <FooterStyled>
      &copy; 2021 COMO. All right reserved.
    </FooterStyled> 
  );
}

export default Footer;