import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { PositionedSidebar } from '../../components/Sidebar/Sidebar';
import Contents from './Contents';
import Currently from './Currently';

const AboutExplore = styled.div`
  position: relative;

  align-self: start;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const About = () => (
  <>
    <Outlet />

    <PositionedSidebar title='Explore'>
      <AboutExplore>
        <Contents />
        <Currently />
      </AboutExplore>
    </PositionedSidebar>
  </>
);

export default About;
