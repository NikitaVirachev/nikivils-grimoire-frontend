import { useState } from 'react';
import { useNavigation, Outlet } from 'react-router-dom';

import Footer from './Footer/Footer';
import { Layout, StyledHeader, StyledNavbar, StyledMobileNavigation } from './PageFrame.styles';

const PageFrame = () => {
  const [offcanvasvVisibility, setOffcanvasVisibility] = useState(false);

  const navigation = useNavigation();
  const loading = navigation.state === 'loading';

  const toggleOffCanvas = () => {
    setOffcanvasVisibility((prev) => !prev);
  };

  return (
    <Layout>
      <StyledHeader toggleSidebar={toggleOffCanvas} />
      <StyledNavbar />

      {loading ? <div>Загрузка...</div> : <Outlet />}

      <Footer />
      <StyledMobileNavigation
        toggle={toggleOffCanvas}
        isOpen={offcanvasvVisibility}
      />
    </Layout>
  );
};

export default PageFrame;
