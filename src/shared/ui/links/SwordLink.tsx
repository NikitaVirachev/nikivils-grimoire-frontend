import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Sword } from '../../../shared/ui/icons';
import { respond } from '../../lib/styles';

const StyledLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  height: 2.6rem;
  padding: 0 1rem;

  font-size: var(--p);
  color: var(--secondary-tp-color);
  text-decoration: none;
  transition: all 0.3s;

  svg .sword-highlight {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    color: var(--primarly-tp-color);
    text-decoration: underline;
    filter: drop-shadow(0.2rem 0.4rem 0.4rem rgba(0, 0, 0, 0.5));

    svg .sword-highlight {
      opacity: 1;
    }
  }
`;

const StyledSword = styled(Sword)`
  width: 8.7rem;

  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

interface LinkProps {
  children: string;
  to: string;
}

const SwordLink = ({ children, to }: LinkProps) => (
  <StyledLink to={to}>
    <StyledSword title='Indicate in the form of a sword' />
    {children}
  </StyledLink>
);

export default SwordLink;
