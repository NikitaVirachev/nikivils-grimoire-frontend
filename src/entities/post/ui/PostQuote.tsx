import styled from 'styled-components';

import { typography } from '@/entities/post/ui/typography';

const PostQuote = styled.blockquote`
  font-size: ${typography.body};
  font-style: italic;

  cite {
    font-weight: 700;
  }
`;

export default PostQuote;
