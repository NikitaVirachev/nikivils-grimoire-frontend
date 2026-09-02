import styled from 'styled-components';

import { MarbleBackground } from '../../../../../shared/ui/backgrounds';

const border = 0.5;

export const Wrapper = styled.nav`
  position: relative;
  padding: ${border + 0.2}rem;

  background: var(--tertiary-color);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: ${border}rem;
    pointer-events: none;

    ${MarbleBackground};

    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  list-style-type: none;
`;
