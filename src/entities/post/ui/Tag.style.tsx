import styled, { css } from 'styled-components';

import { BodyText } from '@/shared/ui/typography';
import { respond } from '@/shared/lib/styles';

export const Tags = styled.div`
  padding: 0 3rem;

  ${respond(
    'tab-portrait',
    css`
      padding: 0 1.5rem;
    `
  )}

  ${respond(
    'phone',
    css`
      padding: 0 1rem;
    `
  )}
`;

export const TagList = styled.ul`
  display: inline;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TagItem = styled.li`
  display: inline;

  &:not(:last-child)::after {
    content: ', ';
  }

  &:last-child::after {
    content: '.';
  }
`;

export const Tag = styled.span`
  ${BodyText};
`;

export const TagsLabel = styled.span`
  ${BodyText};

  color: var(--primarly-tp-color);
`;
