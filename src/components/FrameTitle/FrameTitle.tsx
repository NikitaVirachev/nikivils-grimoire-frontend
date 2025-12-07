import styled from 'styled-components';

import { MarbleBackground } from '../../styles/Backgrounds';

const FrameTitle = styled.h2`
  text-align: center;
  color: var(--tertiary-color);
  line-height: 4rem;
  font-size: var(--h2);
  font-family: 'Uncial Antiqua', serif;
  ${MarbleBackground};
`;

export default FrameTitle;
