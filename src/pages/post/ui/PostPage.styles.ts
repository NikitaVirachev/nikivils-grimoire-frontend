import styled, { css } from 'styled-components';

import { BackLink } from '@/shared/ui/links';
import { respond } from '@/shared/lib/styles';
import { ImageFigure } from '@/entities/post';
import { MainContentPadding } from '@/shared/ui/main-content';

export const Tags = styled.div``;

export const PostExplore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToBack = styled(BackLink)`
  display: none;
  align-self: center;

  ${respond(
    'phone',
    css`
      display: flex;
    `
  )};
`;

export const CoverFigure = styled(ImageFigure)`
  ${MainContentPadding};
`;
