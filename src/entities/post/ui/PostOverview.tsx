import { SwordLink } from '../../../shared/ui/links';
import { Border } from '../../../shared/ui/separators';
import { Post, Content, Header, StyledBat, Title, PostBody } from './PostOverview.styles';

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
