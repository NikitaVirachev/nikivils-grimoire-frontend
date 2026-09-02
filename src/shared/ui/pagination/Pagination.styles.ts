import styled from 'styled-components';

import { Wedge } from '../icons';
import { SecondaryFrame } from '../frames';

export const SwitchPage = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
`;

export const StyledWedge = styled(Wedge)`
  color: var(--gold-bg-color);
`;

export const PreviousPage = styled(StyledWedge)`
  transform: rotateY(180deg);
`;

export const NextPage = styled(StyledWedge)`
  transform: rotateY(360deg);
`;

export const Container = styled.form`
  align-self: center;

  display: flex;
  gap: 1rem;
`;

export const Pages = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 10rem;
  padding: 0.5rem 0;

  ${SecondaryFrame};

  font-family: 'Coelacanth', serif;
  font-size: var(--p);
  color: var(--secondary-tp-color);
  line-height: var(--lh-p);
`;

export const CurrentPage = styled.span``;

export const NumberOfPages = styled.span``;
