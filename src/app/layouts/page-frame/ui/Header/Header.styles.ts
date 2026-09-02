import styled, { css } from 'styled-components';

import { Crescent } from '../../../../../shared/ui/icons';
import BlackSun from './BlackSun';
import { Burger } from '../../../../../shared/ui/icons';
import { respond } from '../../../../../shared/lib/styles';

export const Container = styled.header`
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

export const Title = styled.span`
  font-family: 'Uncial Antiqua', serif;
  font-size: var(--h1);
  line-height: var(--lh1);
  color: var(--white-color);
  filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.25));
`;

export const StyledCrescent = styled(Crescent)`
  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

export const StyledBlackSun = styled(BlackSun)`
  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledBurger = styled(Burger)`
  display: none;

  ${respond(
    'phone',
    css`
      display: block;
    `
  )}
`;
