import styled from 'styled-components';

const Layout = styled.div`
  border: 1px solid var(--secondary-bg-color);
  width: 86rem;
  height: 100%;
`;

const Header = styled.h1`
  font-family: 'Elder Futhark';
`;

const PageFrame = () => {
  return (
    <Layout>
      <Header>Hello World!</Header>
    </Layout>
  );
};

export default PageFrame;
