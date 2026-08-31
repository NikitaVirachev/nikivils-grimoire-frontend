import styled, { css } from 'styled-components';

import Chat from '../../../widgets/Chat/Chat';
import { ActionInput } from '../../../shared/ui/form/action-input';
import Pagination from '../../../widgets/Sidebar/Pagination';
import { Loupe } from '../../../shared/ui/icons';

import { respond } from '../../../shared/lib/styles';

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

export const PhoneSearchInput = styled(ActionInput)`
  display: none;
  margin: 0.5rem 0.5rem 0 0.5rem;

  ${respond(
    'phone',
    css`
      display: grid;
    `
  )}
`;

export const PhonePagination = styled(Pagination)`
  display: none;

  ${respond(
    'phone',
    css`
      display: flex;
    `
  )}
`;

export const StyledLoupe = styled(Loupe)`
  width: inherit;
  height: inherit;
`;
