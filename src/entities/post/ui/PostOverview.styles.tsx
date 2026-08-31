import styled, { css } from 'styled-components';

import { Bat } from '../../../shared/ui/icons';

import { respond } from '../../../shared/lib/styles';

export const Post = styled.article`
  font-family: 'Coelacanth', serif;
  color: var(--secondary-tp-color);
  padding: 0.5rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  ${respond(
    'phone',
    css`
      margin-bottom: 1rem;
    `
  )}
`;

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-left: 3rem;

  ${respond(
    'tab-portrait',
    css`
      padding-left: 0 1.5rem;
    `
  )}

  ${respond(
    'phone',
    css`
      padding: 0 1rem;
    `
  )}
`;

export const Title = styled.h4`
  font-size: var(--h4);
  line-height: var(--lh4);

  flex-grow: 1;
`;

export const PostBody = styled.p`
  font-size: var(--p);
  line-height: var(--lh-p);
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

export const StyledBat = styled(Bat)`
  ${respond(
    'phone',
    css`
      width: 3.6rem;
      height: 1.8rem;
    `
  )}
`;
