import type { ReactNode } from 'react';
import styled from 'styled-components';

import PictureFrame from '../../styles/PictureFrame';
import FrameTitle from '../FrameTitle/FrameTitle';

import sidebarBackgroundUrl from '../../assets/img/backgrounds/sidebar-background.jpg';

const SidebarLayout = styled.aside`
  position: relative;

  display: flex;
  flex-direction: column;

  ${PictureFrame};
`;

const Column = styled.div`
  flex-grow: 1;
  padding: 0 0.2rem 0.2rem 0.2rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${sidebarBackgroundUrl});
    background-repeat: no-repeat;
    background-position: center -25rem;
    opacity: 0.1;
  }
`;

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
