import styled, { css } from 'styled-components';

import { respond } from '../../styles/Mixins';

export const PostContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const PostText = styled.p`
  font-size: var(--p);
  line-height: 2rem;
  padding: 0 2rem;

  ${respond(
    'tab-portrait',
    css`
      padding: 0 2rem;
      line-height: 1.8rem;
    `
  )}

  ${respond(
    'phone',
    css`
      padding: 0;
      line-height: 2rem;
    `
  )}
`;

export const Border = styled.footer`
  font-family: 'Elder Futhark';
  font-size: 0.8rem;
  color: var(--primarly-color);
`;
