import styled, { css } from 'styled-components';

import Bat from '../Icon/Bat';
import SwordLink from './SwordLink';
import { Border } from './Post';

import { respond } from '../../styles/Mixins';

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

  ${respond(
    'phone',
    css`
      margin-bottom: 1rem;
    `
  )}
`;

const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-left: 3rem;

  ${respond(
    'tab-portrait',
    css`
      padding-left: 0 1.5rem;
    `
  )}

  ${respond(
    'phone',
    css`
      padding: 0 1rem;
    `
  )}
`;

const Title = styled.h4`
  font-size: var(--h4);
  line-height: var(--lh4);

  flex-grow: 1;
`;

const PostBody = styled.p`
  font-size: var(--p);
  line-height: var(--lh-p);
  padding: 0 3rem;

  ${respond(
    'tab-portrait',
    css`
      padding: 0 1.5rem;
    `
  )}

  ${respond(
    'phone',
    css`
      padding: 0 1rem;
    `
  )}
`;

const StyledBat = styled(Bat)`
  ${respond(
    'phone',
    css`
      width: 3.6rem;
      height: 1.8rem;
    `
  )}
`;

interface PostOverviewProps {
  title: string;
  overview: string;
  linkToPost: string;
}

const PostOverview = ({ title, overview, linkToPost }: PostOverviewProps) => (
  <Post>
    <Content>
      <Header>
        <StyledBat title='Bat' />
        <Title>{title}</Title>
        <SwordLink to={linkToPost}>Read</SwordLink>
      </Header>
      <PostBody>{overview}</PostBody>
    </Content>

    <Border>
      LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
    </Border>
  </Post>
);

export default PostOverview;
