import { css } from 'styled-components';

import marbleTexture from '../assets/img/textures/marble.gif';
import velvetTexture from '../assets/img/textures/velvet.jpg';
import goldTexture from '../assets/img/textures/gold.jpg';

export const MarbleBackground = css`
  background: url(${marbleTexture}) 0 0 / 5rem 5rem repeat;
`;

export const VelvetBackground = css`
  background: url(${velvetTexture}) 0 0 / 2.1rem 2.1rem repeat;
`;

export const GoldBackground = css`
  background: url(${goldTexture}) 0 0 / 0.9rem 0.9rem repeat;
`;
