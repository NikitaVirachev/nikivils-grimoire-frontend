import { css } from 'styled-components';

import { MarbleBackground } from '../backgrounds';

const PictureFrame = css`
  padding: 0 0.5rem 2rem 0.5rem;

  background: var(--primarly-bg-color);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 0 0.5rem 2rem 0.5rem;
    pointer-events: none;

    ${MarbleBackground};

    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export default PictureFrame;
