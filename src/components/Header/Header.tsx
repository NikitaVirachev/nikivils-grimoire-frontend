import styled, { css } from 'styled-components';

import Crescent from './Crescent';
import BlackSun from './BlackSun';
import Burger from '../Icon/Burger';
import { respond } from '../../styles/Mixins';

const Container = styled.header`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;

  ${respond(
    'phone',
    css`
      justify-content: space-between;
      padding: 0;
    `
  )}
`;

const Title = styled.span`
  font-family: 'Uncial Antiqua', serif;
  font-size: var(--h1);
  line-height: 4rem;
  color: var(--white-color);
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.25));
`;

const StyledCrescent = styled(Crescent)`
  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

const StyledBlackSun = styled(BlackSun)`
  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledBurger = styled(Burger)`
  display: none;

  ${respond(
    'phone',
    css`
      display: block;
    `
  )}
`;

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => (
  <Container className={className}>
    <StyledCrescent />
    <Title>The Grimoire of Nikivils</Title>
    <StyledBlackSun />
    <BurgerButton>
      <StyledBurger title='Burger menu button icon' />
    </BurgerButton>
  </Container>
);

export default Header;
