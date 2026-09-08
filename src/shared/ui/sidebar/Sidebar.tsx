import type { ReactNode } from 'react';

import { FrameTitle } from '../frames';
import { SidebarLayout, Column } from './Sidebar.styles';

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
