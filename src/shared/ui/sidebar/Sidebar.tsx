import type { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { FrameTitle } from '../frames';
import { SidebarLayout, Column } from './Sidebar.styles';
import { respond } from '../../lib/styles';

interface SidebarProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const Sidebar = ({ title, className, children }: SidebarProps) => (
  <SidebarLayout className={className}>
    <FrameTitle>{title}</FrameTitle>
    <Column>{children}</Column>
  </SidebarLayout>
);

export default Sidebar;

export const DesktopSidebar = styled(Sidebar)`
  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;
