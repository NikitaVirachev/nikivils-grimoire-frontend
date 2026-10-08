import type { PostBlock } from '@nikivils/grimoire-contracts';

import Heading from './PostHeading';
import PostParagraph from './PostParagraph';
import PostImage, { Caption, ImageFigure } from './PostImage';

type PostBlockViewProps = {
  block: PostBlock;
};

const PostBlockView = ({ block }: PostBlockViewProps) => {
  switch (block.type) {
    case 'paragraph':
      return <PostParagraph>{block.text}</PostParagraph>;

    case 'heading': {
      const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

      return (
        <Heading
          as={Tag}
          $level={block.level}
        >
          {block.text}
        </Heading>
      );
    }

    case 'quote':
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.author && <cite>{block.author}</cite>}
        </blockquote>
      );

    case 'image':
      return (
        <ImageFigure>
          <PostImage
            src={`/api/v1/media/${block.imageId}`}
            alt={block.alt}
          />

          {block.caption && <Caption>{block.caption}</Caption>}
        </ImageFigure>
      );
  }
};

export default PostBlockView;
