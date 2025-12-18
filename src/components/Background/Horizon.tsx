import styled from 'styled-components';

import horizonImgUrl from '../../assets/img/textures/horizon.png';

const heightOfContent = 1024;
const heightOfHorizon = 50;

const horizonHeightPct = (heightOfHorizon / heightOfContent) * 100;

const HorizonShape = styled.div<{ $topPartHeight: string }>`
  background-image: url(${horizonImgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: repeat-x;

  height: ${horizonHeightPct}%;
  width: 100vw;

  position: absolute;
  top: ${(props) => props.$topPartHeight};
  left: 0;
  transform: translateY(-50%);
`;

interface HorizonProps {
  topPartHeight: string;
}

const Horizon = ({ topPartHeight }: HorizonProps) => (
  <HorizonShape $topPartHeight={topPartHeight} />
);

export default Horizon;
