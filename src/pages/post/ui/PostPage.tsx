import { useLoaderData } from 'react-router-dom';

import PostPageLayout from '@/pages/post/ui/PostPageLayout';
import { PostLayout, PostSubtitle, Tag, TagItem, TagList, TagsLabel } from '@/entities/post';
import { UnderlinedHeader, QuaternaryHeading } from '@/shared/ui/typography';
import { postLoader } from '@/pages/post';
import { Tags } from '@/pages/post/ui/PostPage.styles';

const PostPage = () => {
  const post = useLoaderData<typeof postLoader>();

  return (
    <PostPageLayout>
      <PostLayout>
        <UnderlinedHeader>
          <QuaternaryHeading>{post.title}</QuaternaryHeading>
        </UnderlinedHeader>

        <PostSubtitle>
          <Tags>
            <TagsLabel>Tagged as: </TagsLabel>
            <TagList>
              {post.tags.map((tag) => (
                <TagItem key={tag}>
                  <Tag>{tag}</Tag>
                </TagItem>
              ))}
            </TagList>
          </Tags>
        </PostSubtitle>
      </PostLayout>
    </PostPageLayout>
  );
};

export default PostPage;
