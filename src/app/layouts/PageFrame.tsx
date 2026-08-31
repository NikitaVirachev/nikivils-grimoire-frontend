import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import Header from '../../widgets/Header/Header';
import Navbar from '../../widgets/navbar/Navbar';
import Footer from '../../widgets/Footer/Footer';
import OffCanvas from '../../widgets/OffCanvas/OffCanvas';

import { respond } from '../../shared/lib/styles';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [col-start] 20rem [col-end]);
  grid-template-rows: auto auto 1fr;
  column-gap: 2rem;
  row-gap: 1rem;
  align-content: start;

  height: 100%;
  padding-bottom: 1rem;

  position: relative;
  z-index: 5;

  ${respond(
    'tab-portrait',
    css`
      grid-template-columns: repeat(4, [col-start] 19rem [col-end]);
      column-gap: 0.5rem;
      row-gap: 0.5rem;
    `
  )}

  ${respond(
    'phone',
    css`
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      column-gap: 0.5rem;
      row-gap: 0.5rem;

      padding: 0 1.5rem 1rem 1.5rem;
    `
  )}
`;

const StyledHeader = styled(Header)`
  grid-column: -1 / 1;
`;

const StyledNavbar = styled(Navbar)`
  grid-column: -1 / 1;

  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

const StyledOffCanvas = styled(OffCanvas)`
  display: none;

  ${respond(
    'phone',
    css`
      display: block;
    `
  )}
`;

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
