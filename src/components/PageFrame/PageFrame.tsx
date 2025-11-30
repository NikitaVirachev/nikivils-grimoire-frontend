import styled from 'styled-components';
import Header from '../Header/Header';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20rem);
  gap: 2rem;
  align-content: start;
  height: 100%;
`;

const PageFrame = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default PageFrame;
