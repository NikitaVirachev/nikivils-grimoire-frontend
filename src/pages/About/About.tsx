import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { PositionedSidebar } from '../../components/Sidebar/Sidebar';
import Contents from './Contents';

const AboutExplore = styled.section`
  position: relative;

  align-self: start;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const About = () => (
  <>
    <Outlet />

    <PositionedSidebar title='Explore'>
      <AboutExplore>
        <Contents />
      </AboutExplore>
    </PositionedSidebar>
  </>
);

export default About;
