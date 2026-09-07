import styled, { css } from 'styled-components';

import MainContent from './MainContent';

import { respond } from '../../lib/styles';

const DesktopMainContent = styled(MainContent)`
  grid-column: col-start 1 / col-end 3;

  ${respond(
    'phone',
    css`
      grid-column: -1 / 1;
    `
  )}
`;

export default DesktopMainContent;
