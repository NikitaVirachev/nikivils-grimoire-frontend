import styled from 'styled-components';

import { PictureFrame } from '../frames';
import sidebarBackgroundUrl from '../../assets/img/backgrounds/sidebar-background.jpg';

export const SidebarLayout = styled.aside`
  position: relative;

  display: flex;
  flex-direction: column;

  ${PictureFrame};
`;

export const Column = styled.div`
  flex-grow: 1;
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;

  position: relative;

  display: grid;
  grid-template-columns: 1fr;
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
