import { type ReactNode } from 'react';
import styled from 'styled-components';

import Separator from '../../components/Sidebar/Separator/Separator';

export const QuaternaryHeading = styled.h4`
  font-family: 'Metamorphous', serif;
  font-size: var(--h4);
  font-weight: 500;
  color: var(--secondary-tp-color);
`;

const UnderlinedHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
