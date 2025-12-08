import styled from 'styled-components';

import Bat from '../Icon/Bat';
import SwordLink from './SwordLink';

const Post = styled.article`
  font-family: 'Coelacanth', serif;
  color: var(--secondary-tp-color);
  padding: 0.5rem 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  padding-left: 2rem;
`;

const Title = styled.h4`
  font-size: var(--h4);

  flex-grow: 1;
`;

const PostBody = styled.p`
  font-size: var(--p);
  padding: 0 2rem;
`;

const Border = styled.footer`
  font-family: 'Elder Futhark';
  font-size: 0.8rem;
  color: var(--primarly-color);
`;

interface PostOverviewProps {
  title: string;
  overview: string;
}

const PostOverview = ({ title, overview }: PostOverviewProps) => (
  <Post>
    <Content>
      <Header>
        <Bat title='Bat' />
        <Title>{title}</Title>
        <SwordLink to=''>Read</SwordLink>
      </Header>
      <PostBody>{overview}</PostBody>
    </Content>

    <Border>
      LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHK
    </Border>
  </Post>
);

export default PostOverview;
