import styled from 'styled-components';

const heightOfTower = 488;
const heightOfContent = 1024;
const heightOfEye = 86.21;

const towerHeightPct = (heightOfTower / heightOfContent) * 100;
const eyeHeightPct = (heightOfEye / heightOfTower) * 100;

const widthOfTower = 100;
const widthOfEye = 4;

const eyeWidthPct = (widthOfEye / widthOfTower) * 100;

const TowerRoot = styled.div<{ $topPartHeight: string }>`
  width: 10rem;
  height: ${towerHeightPct}%;

  position: absolute;
  bottom: calc(100% - ${(props) => props.$topPartHeight} - 1px);
  right: calc(100% + 9.5rem);
`;

const TowerShape = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const Eye = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  width: ${eyeWidthPct}%;
  height: ${eyeHeightPct}%;
  background: var(--tertiary-color);

  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
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

    <Eye />
  </TowerRoot>
);

export default Tower;
