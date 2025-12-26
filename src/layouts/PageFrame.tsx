import type { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import { respond } from '../styles/Mixins';

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

const PageFrame = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <StyledHeader />
      <StyledNavbar />
      {children}
      <Footer />
    </Layout>
  );
};

export default PageFrame;
