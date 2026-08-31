import styled from 'styled-components';

import { ContentSection } from '../../../../shared/ui/content';

export const FAQSection = styled(ContentSection)`
  font-size: var(--p);
`;

export const FAQItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Question = styled.h3`
  font-weight: normal;
`;

export const QuestionSign = styled.span`
  color: var(--primarly-tp-color);
`;

export const QuestionText = styled.span`
  text-decoration: underline;
`;

export const Answer = styled.p``;
