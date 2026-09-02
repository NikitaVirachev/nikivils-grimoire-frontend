import type { PropsWithChildren } from 'react';
import { useState } from 'react';

import Footer from '../../../../widgets/Footer/Footer';
import { Layout, StyledHeader, StyledNavbar, StyledOffCanvas } from './PageFrame.styles';

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
      <StyledOffCanvas
        toggle={toggleOffCanvas}
        isOpen={offcanvasvVisibility}
      />
    </Layout>
  );
};

export default PageFrame;
