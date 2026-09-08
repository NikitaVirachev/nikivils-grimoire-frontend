import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import Footer from './Footer/Footer';
import { Layout, StyledHeader, StyledNavbar, StyledMobileNavigation } from './PageFrame.styles';

const PageFrame = ({ children }: PropsWithChildren) => {
  const [offcanvasvVisibility, setOffcanvasVisibility] = useState(false);

  const toggleOffCanvas = () => {
    setOffcanvasVisibility((prev) => !prev);
  };

  return (
    <Layout>
      <StyledHeader toggleSidebar={toggleOffCanvas} />
      <StyledNavbar />
      {children}
      <Footer />
      <StyledMobileNavigation
        toggle={toggleOffCanvas}
        isOpen={offcanvasvVisibility}
      />
    </Layout>
  );
};

export default PageFrame;
