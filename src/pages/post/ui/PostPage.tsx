import { useLoaderData } from 'react-router-dom';

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
} from '@/entities/post';
import { UnderlinedHeader, QuaternaryHeading } from '@/shared/ui/typography';
import { postLoader } from '@/pages/post';
import { Tags } from '@/pages/post/ui/PostPage.styles';

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

  return (
    <PostPageLayout>
      <PostLayout>
        <UnderlinedHeader>
          <QuaternaryHeading>{title}</QuaternaryHeading>
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
            <PostBlockView block={block} />
          ))}
        </PostContent>
      </PostLayout>
    </PostPageLayout>
  );
};

export default PostPage;
