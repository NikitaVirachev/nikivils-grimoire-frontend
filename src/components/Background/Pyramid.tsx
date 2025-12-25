import styled, { css } from 'styled-components';

import { respond } from '../../styles/Mixins';

const heightOfPyramid = 488;
const heightOfContent = 1024;
const heightOfCross = 156;

const pyramidHeightPct = (heightOfPyramid / heightOfContent) * 100;
const crossHeightPct = (heightOfCross / heightOfPyramid) * 100;

const widthOfPyramid = 200;
const widthOfCross = 46;

const crossWidthPct = (widthOfCross / widthOfPyramid) * 100;

const realWidthOfPyramidRem = 20;
const maxOffsetRem = 4.5 + realWidthOfPyramidRem / 2; // 14.5
const rangeRem = 144 - 109.5; // 34.5
const slope = maxOffsetRem / rangeRem;

const PyramidRoot = styled.div<{ $topPartHeight: string }>`
  width: ${realWidthOfPyramidRem}rem;
  height: ${pyramidHeightPct}%;

  position: absolute;
  bottom: calc(100% - ${(props) => props.$topPartHeight} - 1px);

  /* 1) >=1440px */
  left: calc(100% + ${maxOffsetRem}rem);

  transform: translateX(-50%);

  ${respond(
    'tab-landscape',
    css`
      left: calc(100% + clamp(0rem, calc((100vw - 109.5rem) * ${slope}), ${maxOffsetRem}rem));
    `
  )}

  ${respond(
    'tab-portrait',
    css`
      display: none;
    `
  )}
`;

const PyramidShape = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const CrossShape = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  width: ${crossWidthPct}%;
  height: ${crossHeightPct}%;

  filter: drop-shadow(0 0 1.4rem var(--tertiary-color))
    drop-shadow(0 0 0.7rem var(--secondary-color));
`;

interface PyramidProps {
  topPartHeight: string;
}

const Pyramid = ({ topPartHeight }: PyramidProps) => (
  <PyramidRoot $topPartHeight={topPartHeight}>
    <PyramidShape
      viewBox='0 0 200 488'
      preserveAspectRatio='none'
      aria-hidden
    >
      <path
        d='M49.4949 246.465L100 0L150.505 246.465L200 488H0L49.4949 246.465Z'
        fill='var(--secondary-bg-color)'
      />
    </PyramidShape>

    <CrossShape
      viewBox='0 0 74 184'
      preserveAspectRatio='none'
      aria-hidden
    >
      <path
        d='M35.4998 89.5159L36.9998 14L38.4998 89.5159L60 92L38.4998 94.4841L36.9998 170L35.4998 94.4841L14 92L35.4998 89.5159Z'
        fill='var(--primarly-color)'
      />
    </CrossShape>
  </PyramidRoot>
);

export default Pyramid;
