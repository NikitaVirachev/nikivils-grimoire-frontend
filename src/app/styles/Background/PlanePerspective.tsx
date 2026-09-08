import styled from 'styled-components';

import CrossDiagonals from './CrossDiagonals';

const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;

  ${CrossDiagonals('var(--grass-bottom-ton)', '1.2rem')};
`;

const MiddleContainer = styled.div`
  position: absolute;
  bottom: 50%;
  width: 100%;
  height: 25%;

  ${CrossDiagonals('var(--grass-middle-ton)', '0.6rem')};
`;

const TopContainer = styled.div`
  position: absolute;
  bottom: 75%;
  width: 100%;
  height: 12.5%;

  ${CrossDiagonals('var(--grass-top-ton)', '0.6rem')};
`;

const PerspectiveContainer = styled.div<{ $height: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100% - ${(props) => props.$height});
`;

type PlanePerspectiveProps = {
  height: string;
};

const PlanePerspective = ({ height }: PlanePerspectiveProps) => (
  <PerspectiveContainer $height={height}>
    <TopContainer />
    <MiddleContainer />
    <BottomContainer />
  </PerspectiveContainer>
);

export default PlanePerspective;
