import styled, { css } from 'styled-components';

import { MarbleBackground } from '../../styles/Backgrounds';
import { respond } from '../../styles/Mixins';

const FrameTitle = styled.h2`
  text-align: center;
  color: var(--tertiary-color);
  line-height: 4rem;
  font-size: var(--h2);
  font-family: 'Uncial Antiqua', serif;
  ${MarbleBackground};

  ${respond(
    'phone',
    css`
      line-height: 3rem;
    `
  )}
`;

export default FrameTitle;
