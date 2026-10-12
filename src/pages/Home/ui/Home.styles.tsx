import styled from 'styled-components';

import { Chat } from '@/widgets/Chat';
import { Loupe } from '@/shared/ui/icons';

export const PostsExplore = styled.section`
  position: relative;

  align-self: start;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PositionedChat = styled(Chat)`
  align-self: end;
`;

export const StyledLoupe = styled(Loupe)`
  width: inherit;
  height: inherit;
`;
