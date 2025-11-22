import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import PlanePerspective from './PlanePerspective';

const TopPartHeight = '61.33%';

const StyledBackground = styled.div`
  background-image:
    linear-gradient(
      to bottom,
      var(--primarly-color) 34%,
      var(--secondary-color) 76%,
      var(--tertiary-color)
    ),
    linear-gradient(to bottom, var(--secondary-bg-color) 3%, var(--grass-color));

  background-repeat: no-repeat;

  background-size:
    100% ${TopPartHeight},
    100% calc(100% - ${TopPartHeight});

  background-position:
    0 0,
    0 100%;

  height: 100vh;
`;

const Background = ({ children }: PropsWithChildren) => (
  <StyledBackground>
    {children}
    <PlanePerspective height={TopPartHeight} />
  </StyledBackground>
);

export default Background;
