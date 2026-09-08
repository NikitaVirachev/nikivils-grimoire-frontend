import styled from 'styled-components';

import { MarbleBackground } from '../backgrounds';

const FrameTitle = styled.h2`
  text-align: center;
  color: var(--tertiary-color);
  line-height: var(--lh2);
  font-size: var(--h2);
  font-family: 'Uncial Antiqua', serif;
  ${MarbleBackground};
`;

export default FrameTitle;
