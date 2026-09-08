import { Outlet } from 'react-router-dom';

import Background from '../../styles/Background/Background';
import { PageFrame } from '../page-frame';

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
