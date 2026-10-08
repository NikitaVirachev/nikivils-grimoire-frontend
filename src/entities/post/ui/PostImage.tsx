import styled from 'styled-components';

import { typography } from './typography';

export const Caption = styled.figcaption`
  font-size: ${typography.caption};
  text-align: center;
  opacity: 0.7;
  margin-top: 0.5rem;
`;

export const ImageFigure = styled.figure`
  margin: 0 auto;
`;

const PostImage = styled.img`
  display: block;

  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 50rem;

  object-fit: contain;
`;

export default PostImage;
