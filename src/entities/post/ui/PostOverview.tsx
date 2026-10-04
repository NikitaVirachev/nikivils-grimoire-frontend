import type { PostSummaryDto } from '@nikivils/grimoire-contracts';

import { SwordLink } from '@/shared/ui/links';
import { Border } from '@/shared/ui/separators';
import { Post, Content, Header, StyledBat, Title, PostBody } from './PostOverview.styles';

const PostOverview = ({ title, overview, tags }: PostSummaryDto) => {

  <Post>
    <Content>
      <Header>
        <StyledBat title='Bat' />
        <Title>{title}</Title>
        <SwordLink to={linkToPost}>Read</SwordLink>
      </Header>
      <PostBody>{overview}</PostBody>
    </Content>
  return (

    <Border>
      LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
    </Border>
  </Post>
  );
};

export default PostOverview;
