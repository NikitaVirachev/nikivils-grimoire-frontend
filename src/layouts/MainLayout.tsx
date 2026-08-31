import { Outlet } from 'react-router-dom';

import Background from '../app/styles/Background/Background';
import PageFrame from '../app/layouts/PageFrame';

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
