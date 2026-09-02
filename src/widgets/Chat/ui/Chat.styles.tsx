import styled from 'styled-components';

import { SectionCard } from '../../../shared/ui/section-card';
import { Play } from '../../../shared/ui/icons';

export const ChatCard = styled(SectionCard)`
  height: 30rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;

  flex-grow: 1;

  padding: 0 0.2rem 0.2rem 0.2rem;
`;

export const Messages = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 0;

  overflow-y: auto;

  padding-right: 1.5rem;
  scrollbar-color: var(--primarly-color) transparent;
`;

export const Bubble = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 0.2rem solid var(--primarly-color);
  border-radius: 1rem 1rem 1rem 0;

  font-family: 'Coelacanth', serif;
  font-size: var(--p);
`;

export const Author = styled.p`
  color: var(--primarly-color);
`;

export const MessageText = styled.p`
  color: var(--secondary-tp-color);
`;

export const StyledPlay = styled(Play)`
  width: inherit;
  height: inherit;
`;
