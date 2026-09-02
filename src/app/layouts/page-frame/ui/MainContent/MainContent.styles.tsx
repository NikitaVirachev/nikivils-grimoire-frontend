import styled, { css } from 'styled-components';

import chainLinkUrl from '../assets/img/icons/ChainLink.png';
import mainBackgroundUrl from '../assets/img/backgrounds/main-background.jpg';

import { PictureFrame } from '../../../../../shared/ui/frames';
import { Skull } from '../../../../../shared/ui/icons';

import { respond } from '../../../../../shared/lib/styles';

export const MainContentLayout = styled.main`
  position: relative;

  min-height: 0;
  display: flex;
  flex-direction: column;

  ${PictureFrame};
`;

export const Content = styled.section`
  flex-grow: 1;
  min-height: 0;

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  padding: 0.5rem;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: top center / cover no-repeat url(${mainBackgroundUrl});
    opacity: 0.1;
  }
`;

export const LeftChain = styled.div`
  width: 2.4rem;
  position: relative;

  background-image: url(${chainLinkUrl});
  background-repeat: repeat-y;
  background-position: center;
`;

export const Column = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Скрыть нативный скроллбар */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge legacy */

  &::-webkit-scrollbar {
    width: 0;
    height: 0; /* Chrome/Safari/Opera */
  }

  ${respond(
    'phone',
    css`
      gap: 1.5rem;
    `
  )}
`;

export const RightChain = styled.div`
  width: 2.4rem;
  position: relative;
  justify-content: center;
`;

export const ScrollTrack = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  background: transparent;
`;

export const ScrollThumb = styled.div`
  position: absolute;
  width: 100%;
  height: var(--thumb-h, 8px);
  transition:
    height 80ms linear,
    top 80ms linear;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: calc(100% - 2.4rem);
    left: 0;
    top: 0;
    background-image: url(${chainLinkUrl});
    background-repeat: repeat-y;
    background-position: center;
  }
`;

export const StyledSkull = styled(Skull)`
  position: absolute;
  bottom: 0;
  z-index: 4;
  cursor: grab;
  touch-action: none;
  user-select: none;
`;
