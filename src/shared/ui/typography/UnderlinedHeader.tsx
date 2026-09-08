import { type ReactNode } from 'react';
import styled from 'styled-components';

import { Separator } from '../separators';

const UnderlinedHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: start;

  width: 27.6rem;
`;

type UnderlinedHeaderProps = {
  children: ReactNode;
};

export const UnderlinedHeader = ({ children }: UnderlinedHeaderProps) => (
  <UnderlinedHeaderWrapper>
    {children}
    <Separator title='Line under header text' />
  </UnderlinedHeaderWrapper>
);
