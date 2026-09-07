import styled, { css } from 'styled-components';

import Sidebar from './Sidebar';

import { respond } from '../../lib/styles';

const DesktopSidebar = styled(Sidebar)`
  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

export default DesktopSidebar;
