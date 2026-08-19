import styled, { css } from 'styled-components';

import Contents from './Contents';
import Currently from './Currently';
import { Border } from '../../components/Post/Post';

import { respond } from '../../styles/Mixins';

export const PhoneContents = styled(Contents)`
  display: none;

  ${respond(
    'phone',
    css`
      display: block;
    `
  )}
`;

export const PhoneCurrently = styled(Currently)`
  display: none;

  ${respond(
    'phone',
    css`
      display: block;
    `
  )}
`;

export const PhoneBorder = styled(Border)`
  display: none;

  ${respond(
    'phone',
    css`
      display: block;
    `
  )}
`;
