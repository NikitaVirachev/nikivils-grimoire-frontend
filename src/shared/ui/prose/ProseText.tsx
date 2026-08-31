import styled, { css } from 'styled-components';

import { BodyText } from '../typography';

import { respond } from '../../lib/styles';

export const ProseText = styled.p`
  ${BodyText};
  padding: 0 2rem;

  ${respond(
    'tab-portrait',
    css`
      padding: 0 2rem;
    `
  )}

  ${respond(
    'phone',
    css`
      padding: 0;
    `
  )}
`;
