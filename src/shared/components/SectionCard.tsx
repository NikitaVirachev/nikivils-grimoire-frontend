import styled from 'styled-components';

import { VelvetBackground } from '../../styles/Backgrounds';

export const SectionCard = styled.section`
  padding: 0.5rem;
  height: 30rem;
  border-radius: 1rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 0.5rem;
    border-radius: 1rem;
    pointer-events: none;

    ${VelvetBackground};

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

export const SectionCardTitle = styled.h3`
  font-family: 'Uncial Antiqua', serif;
  font-size: var(--h3);
  color: var(--tertiary-color);
  text-align: start;

  ${VelvetBackground};

  padding: 0 0.5rem;
`;
