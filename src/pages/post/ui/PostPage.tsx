import { useLoaderData, useLocation } from 'react-router-dom';

import PostPageLayout from '@/pages/post/ui/PostPageLayout';
import {
  PostLayout,
  PostSubtitle,
  Tag,
  TagItem,
  TagList,
  TagsLabel,
  PostedOn,
  PublishDate,
  PostBlockView,
  PostContent,
  PostImage,
  ImageFigure,
  PostHeading,
} from '@/entities/post';
import { UnderlinedHeader } from '@/shared/ui/typography';
import { postLoader } from '@/pages/post';
import { Tags, ToBack } from '@/pages/post/ui/PostPage.styles';

const PostPage = () => {
  const { publishedAt, title, tags, content, cover } = useLoaderData<typeof postLoader>();
  const blocks = content.blocks;

  const publishDate = new Date(publishedAt || '');

  const displayDate = publishDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const datetimeDate = publishDate.toISOString().slice(0, 10);

  const location = useLocation();

  return (
    <PostPageLayout>
      <PostLayout>
        <UnderlinedHeader>
          <PostHeading
            as='h1'
            $level={1}
          >
            {title}
          </PostHeading>
        </UnderlinedHeader>

        <PostSubtitle>
          <PostedOn>
            Posted on <PublishDate dateTime={datetimeDate}>{displayDate}</PublishDate>
          </PostedOn>

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
        </PostSubtitle>

        {cover && (
          <ImageFigure>
            <PostImage
              src={`/api/v1/media/${cover.imageId}`}
              alt={cover.alt}
            />
          </ImageFigure>
        )}

        <PostContent>
          {blocks.map((block) => (
            <PostBlockView
              key={block.id}
              block={block}
            />
          ))}
        </PostContent>

        <ToBack to={location.state?.from ?? '/'} />
      </PostLayout>
    </PostPageLayout>
  );
};

export default PostPage;
