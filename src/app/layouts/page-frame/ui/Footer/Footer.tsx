import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-family: 'Coelacanth', serif;
  font-size: var(--small);
  color: var(--tertiary-color);
  text-align: center;

  grid-column: -1 / 1;
`;

const Footer = () => <StyledFooter>Website made by me. Last update 18.12.2025</StyledFooter>;

export default Footer;
