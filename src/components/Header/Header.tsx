import styled from 'styled-components';

import Crescent from './Crescent';
import BlackSun from './BlackSun';

const Container = styled.header`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  grid-column: -1 / 1;

  padding: 2rem 0;
`;

const Title = styled.span`
  font-family: 'Uncial Antiqua', serif;
  font-size: var(--h1);
  line-height: 4rem;
  color: var(--white-color);
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.25));
`;

const Header = () => (
  <Container>
    <Crescent />
    <Title>The Grimoire of Nikivils</Title>
    <BlackSun />
  </Container>
);

export default Header;
