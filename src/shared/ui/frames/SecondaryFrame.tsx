import { css } from 'styled-components';

import secondaryFrameUrl from '../../../assets/img/frame-seconadry.svg';

const SecondaryFrame = css`
  border-image-source: url(${secondaryFrameUrl});
  border-image-slice: 11 15;
  border-image-width: 11px 15px;
  border-image-repeat: stretch;
`;

export default SecondaryFrame;
