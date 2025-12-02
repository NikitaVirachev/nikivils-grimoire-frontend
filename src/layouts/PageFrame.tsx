import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20rem);
  column-gap: 2rem;
  row-gap: 1rem;
  align-content: start;
  height: 100%;
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
