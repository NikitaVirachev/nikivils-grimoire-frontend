import { Outlet } from 'react-router-dom';

import { DesktopSidebar } from '../../../../shared/ui/sidebar';
import { AboutExplore } from './AboutLayout.styles';
import Contents from '../Contents/Contents';
import Currently from '../Currently/Currently';

export const AboutLayout = () => (
  <>
    <Outlet />

    <DesktopSidebar title='Explore'>
      <AboutExplore>
        <Contents />
        <Currently />
      </AboutExplore>
    </DesktopSidebar>
  </>
);
