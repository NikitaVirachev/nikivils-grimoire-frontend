import { Outlet } from 'react-router-dom';

import Background from '../components/Background/Background';
import PageFrame from './PageFrame';

const MainLayout = () => (
  <>
    <Background>
      <PageFrame>
        <Outlet />
      </PageFrame>
    </Background>
  </>
);

export default MainLayout;
