import styled, { css } from 'styled-components';

import { respond } from '../../../shared/lib/styles';

const heightOfTower = 488;
const heightOfContent = 1024;
const heightOfEye = 86.21;

const towerHeightPct = (heightOfTower / heightOfContent) * 100;
const eyeHeightPct = (heightOfEye / heightOfTower) * 100;

const widthOfTower = 100;
const widthOfEye = 4;

const eyeWidthPct = (widthOfEye / widthOfTower) * 100;

const realWidthOfTowerRem = 10;
const maxOffsetRem = 9.5 + realWidthOfTowerRem / 2; // 14.5
const rangeRem = 144 - 109.5; // 34.5
const slope = maxOffsetRem / rangeRem;

const TowerRoot = styled.div<{ $topPartHeight: string }>`
  width: ${realWidthOfTowerRem}rem;
  height: ${towerHeightPct}%;

  position: absolute;
  bottom: calc(100% - ${(props) => props.$topPartHeight} - 1px);

  /* 1) >=1440px */
  right: calc(100% + ${maxOffsetRem}rem);

  transform: translateX(50%);

  ${respond(
    'tab-landscape',
    css`
      right: calc(100% + clamp(0rem, calc((100vw - 109.5rem) * ${slope}), ${maxOffsetRem}rem));
    `
  )}

  ${respond(
    'tab-square',
    css`
      display: none;
    `
  )}
`;

const TowerShape = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const Eye = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  width: ${eyeWidthPct}%;
  height: ${eyeHeightPct}%;

  filter: drop-shadow(0 0 1.4rem var(--tertiary-color))
    drop-shadow(0 0 0.7rem var(--secondary-color));
`;

interface TowerProps {
  topPartHeight: string;
}

const Tower = ({ topPartHeight }: TowerProps) => (
  <TowerRoot $topPartHeight={topPartHeight}>
    <TowerShape
      viewBox='0 0 100 488'
      preserveAspectRatio='none'
      aria-hidden
    >
      <path
        d='M10 0L16.6915 61.5855C18.2894 76.2915 30.7074 87.4333 45.5 87.4333V128.167C45.5 130.376 47.2909 132.167 49.5 132.167C51.7091 132.167 53.5 130.376 53.5 128.167V87.4333C68.3353 87.4333 80.8312 76.3483 82.6001 61.6188L90 0L100 488H0L10 0Z'
        fill='var(--secondary-bg-color)'
      />
    </TowerShape>

    <Eye
      viewBox='0 0 4 87'
      preserveAspectRatio='none'
      aria-hidden
    >
      <path
        d='M2 0L4 43.1067L2 86.2133L0 43.1067L2 0Z'
        fill='var(--tertiary-color)'
      />
    </Eye>
  </TowerRoot>
);

export default Tower;
