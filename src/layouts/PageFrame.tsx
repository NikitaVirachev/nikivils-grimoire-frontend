import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [col-start] 20rem [col-end]);
  grid-template-rows: auto auto 1fr;
  column-gap: 2rem;
  row-gap: 1rem;
  align-content: start;
  height: 100%;
  padding-bottom: 2rem;

  position: relative;
  z-index: 5;
`;

const PageFrame = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Header />
      <Navbar />
      {children}
    </Layout>
  );
};

export default PageFrame;
