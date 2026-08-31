import { css } from 'styled-components';

import primarlyFrameUrl from '../../../assets/img/frame-primarly.svg';

const PrimarlyFrame = css`
  border-image-source: url(${primarlyFrameUrl});
  border-image-slice: 11 15;
  border-image-width: 11px 15px;
  border-image-repeat: stretch;
`;

export default PrimarlyFrame;
