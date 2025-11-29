import styled from 'styled-components';

const heightOfPyramid = 488;
const heightOfContent = 1024;
const heightOfCross = 156;

const pyramidHeightPct = (heightOfPyramid / heightOfContent) * 100;
const crossHeightPct = (heightOfCross / heightOfPyramid) * 100;

const widthOfPyramid = 200;
const widthOfCross = 46;

const crossWidthPct = (widthOfCross / widthOfPyramid) * 100;

const PyramidRoot = styled.div<{ $topPartHeight: string }>`
  width: 20rem;
  height: ${pyramidHeightPct}%;

  position: absolute;
  bottom: calc(100% - ${(props) => props.$topPartHeight} - 1px);
  left: calc(100% + 4.5rem);
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
  top: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  width: ${crossWidthPct}%;
  height: ${crossHeightPct}%;
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
