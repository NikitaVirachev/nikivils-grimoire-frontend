import styled, { css } from 'styled-components';

import Contents from './Contents/Contents';
import Currently from './Currently/Currently';
import { Border } from '../../../shared/ui/separators';

import { respond } from '../../../shared/lib/styles';

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
