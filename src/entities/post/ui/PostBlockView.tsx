import type { PostBlock } from '@nikivils/grimoire-contracts';

import Heading from './PostHeading';
import PostParagraph from './PostParagraph';
import PostImage, { Caption, ImageFigure } from './PostImage';
import PostQuote from '@/entities/post/ui/PostQuote';

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
        <PostQuote>
          <p>{block.text}</p>
          {block.author && <cite>{block.author}</cite>}
        </PostQuote>
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
