import styled from 'styled-components';

const FooterStyled = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.primary};
`

const Footer = () => {
  return(
    <FooterStyled>
      &copy; 2021 COMO. All right reserved.
    </FooterStyled> 
  );
}

export default Footer;