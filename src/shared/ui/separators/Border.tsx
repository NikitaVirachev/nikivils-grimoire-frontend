import styled from 'styled-components';

const BorderContainer = styled.div.attrs({
  role: 'separator',
})`
  font-family: 'Elder Futhark', serif;
  font-size: 0.8rem;
  color: var(--primarly-color);
`;

interface BorderProps {
  className?: string;
}

const Border = ({ className }: BorderProps) => (
  <BorderContainer className={className}>
    LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
  </BorderContainer>
);

export default Border;
