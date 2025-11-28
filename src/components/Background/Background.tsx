import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import PlanePerspective from './PlanePerspective';
import Tower from './Tower';

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
`;

const Background = ({ children }: PropsWithChildren) => (
  <StyledBackground>
    <Wrapper>
      <Content>
        <Tower topPartHeight={TopPartHeight} />
        {children}
      </Content>
    </Wrapper>
    <PlanePerspective height={TopPartHeight} />
  </StyledBackground>
);

export default Background;
