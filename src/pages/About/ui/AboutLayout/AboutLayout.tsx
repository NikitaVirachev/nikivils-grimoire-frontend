import { Outlet } from 'react-router-dom';

import { PositionedSidebar } from '../../../../widgets/Sidebar/Sidebar';
import { AboutExplore } from './AboutLayout.styles';
import Contents from '../Contents/Contents';
import Currently from '../Currently/Currently';

export const AboutLayout = () => (
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
