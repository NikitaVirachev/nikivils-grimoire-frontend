import styled, { css } from 'styled-components';

import { respond } from '../../styles/Mixins';

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const PostText = styled.p`
  font-size: var(--p);
  line-height: 2rem;
  padding: 0 2rem;

  ${respond(
    'tab-portrait',
    css`
      padding: 0 1.5rem;
    `
  )}

  ${respond(
    'phone',
    css`
      padding: 0 1rem;
    `
  )}
`;
