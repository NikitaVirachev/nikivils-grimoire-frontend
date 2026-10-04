import type { PostSummaryDto } from '@nikivils/grimoire-contracts';

import { SwordLink } from '@/shared/ui/links';
import { Border } from '@/shared/ui/separators';
import { Post, Content, Header, StyledBat, Title, PostBody } from './PostOverview.styles';
import { Tags, TagList, TagItem, Tag, TagsLabel } from '@/entities/post/ui/Tag.style.tsx';

const PostOverview = ({ title, overview, tags }: PostSummaryDto) => {
  const linkToPost = '';

  return (
    <Post>
      <Content>
        <Header>
          <StyledBat title='Bat' />
          <Title>{title}</Title>
          <SwordLink to={linkToPost}>Read</SwordLink>
        </Header>
        <PostBody>{overview}</PostBody>
        {tags?.length > 0 && (
          <Tags>
            <TagsLabel>Tagged as: </TagsLabel>
            <TagList>
              {tags.map((tag) => (
                <TagItem key={tag}>
                  <Tag>{tag}</Tag>
                </TagItem>
              ))}
            </TagList>
          </Tags>
        )}
      </Content>

      <Border>
        LoremipsumdolorsitametconsecteturSedrisuseuismodmalesuadaelementum.MaecenasincommodoametlacusantecursusFringillafelissemperenimv.UHKipsumdolorsitametconsecteturSedrisuseuismodmales
      </Border>
    </Post>
  );
};

export default PostOverview;
