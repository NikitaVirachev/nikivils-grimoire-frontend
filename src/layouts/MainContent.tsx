import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

import PictureFrame from '../styles/PictureFrame';
import Scull from '../components/Icon/Scull';
import FrameTitle from '../components/FrameTitle/FrameTitle';

import chainLinkUrl from '../assets/img/icons/ChainLink.png';
import mainBackgroundUrl from '../assets/img/backgrounds/main-background.jpg';

const MainContentLayout = styled.main`
  position: relative;

  min-height: 0;
  display: flex;
  flex-direction: column;

  ${PictureFrame};
`;

const Content = styled.section`
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

const LeftChain = styled.div`
  width: 2.4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url(${chainLinkUrl});
    background-repeat: repeat-y;
    background-position: center;
  }
`;

const Column = styled.div`
  position: relative;
  overflow-y: auto;

  /* Скрыть нативный скроллбар */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge legacy */

  &::-webkit-scrollbar {
    width: 0;
    height: 0; /* Chrome/Safari/Opera */
  }
`;

const RightChain = styled.div`
  width: 2.4rem;
  position: relative;
  justify-content: center;
`;

const ScrollTrack = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  background: transparent;
`;

const ScrollThumb = styled.div<{ height: number }>`
  position: absolute;
  width: 100%;
  height: ${({ height }) => height}px;
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

const BigChunk = styled.div`
  height: 100rem;
`;

const StyledSkull = styled(Scull)`
  position: absolute;
  bottom: 0;
  z-index: 4;
  cursor: grab;
  touch-action: none;
`;

interface MainContentProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const MainContent = ({ title, className, children }: MainContentProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const startYRef = useRef(0);
  const startHRef = useRef(0);

  const [thumbHeight, setThumbHeight] = useState(8);

  const minPiecePx = 24; // тот самый "небольшой кусочек" в начале

  const recalc = () => {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const { scrollTop, scrollHeight, clientHeight } = scroller;
    const trackHeight = track.clientHeight;

    const maxScroll = Math.max(1, scrollHeight - clientHeight);
    const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));

    const h = minPiecePx + progress * (trackHeight - minPiecePx);

    setThumbHeight(h);
  };

  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

  const setScrollFromThumbHeight = (h: number) => {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const trackHeight = track.clientHeight;
    const maxScroll = Math.max(1, scroller.scrollHeight - scroller.clientHeight);

    const progress = clamp((h - minPiecePx) / (trackHeight - minPiecePx), 0, 1);

    scroller.scrollTop = progress * maxScroll;
  };

  const onSkullPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;

    draggingRef.current = true;
    startYRef.current = e.clientY;
    startHRef.current = thumbHeight;

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    const onMove = (ev: PointerEvent) => {
      if (!draggingRef.current) return;

      const dy = ev.clientY - startYRef.current; // вниз = +
      const trackHeight = track.clientHeight;

      // тянем вниз -> хотим увеличить высоту
      const newH = clamp(startHRef.current + dy, minPiecePx, trackHeight);

      setThumbHeight(newH);
      setScrollFromThumbHeight(newH);
    };

    const onUp = (ev: PointerEvent) => {
      draggingRef.current = false;

      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);

      const el = e.currentTarget as HTMLElement;
      if (el?.hasPointerCapture?.(ev.pointerId)) {
        el.releasePointerCapture(ev.pointerId);
      }
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  };

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    recalc();
    scroller.addEventListener('scroll', recalc, { passive: true });
    return () => scroller.removeEventListener('scroll', recalc);
  }, []);

  // чтобы реагировать на изменение высоты/контента/вьюпорта
  useLayoutEffect(() => {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const ro = new ResizeObserver(recalc);
    ro.observe(scroller);
    ro.observe(track);

    return () => ro.disconnect();
  }, []);

  return (
    <MainContentLayout className={className}>
      <FrameTitle>{title}</FrameTitle>
      <Content>
        <LeftChain />
        <Column ref={scrollRef}>
          <BigChunk />
          {children}
        </Column>
        <RightChain>
          <ScrollTrack ref={trackRef}>
            <ScrollThumb height={thumbHeight}>
              <StyledSkull
                title='Scull'
                onPointerDown={onSkullPointerDown}
              />
            </ScrollThumb>
          </ScrollTrack>
        </RightChain>
      </Content>
    </MainContentLayout>
  );
};

export default MainContent;
