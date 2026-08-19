import { useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import type { ReactNode } from 'react';

import PictureFrame from '../styles/PictureFrame';
import Skull from '../components/Icon/Skull';
import FrameTitle from '../components/FrameTitle/FrameTitle';
import { respond } from '../styles/Mixins';

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

  background-image: url(${chainLinkUrl});
  background-repeat: repeat-y;
  background-position: center;
`;

const Column = styled.div`
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

const ScrollThumb = styled.div`
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

const StyledSkull = styled(Skull)`
  position: absolute;
  bottom: 0;
  z-index: 4;
  cursor: grab;
  touch-action: none;
  user-select: none;
`;

interface MainContentProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const MainContent = ({ title, className, children }: MainContentProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const startYRef = useRef(0);
  const startHRef = useRef(0);
  const rafDragRef = useRef<number | null>(null);
  const lastClientYRef = useRef<number>(0);

  const minPiecePx = 24; // тот самый "небольшой кусочек" в начале

  const setThumbHeightPx = (h: number) => {
    const thumb = thumbRef.current;
    if (!thumb) return;
    thumb.style.setProperty('--thumb-h', `${h}px`);
  };

  const recalc = useCallback(() => {
    if (draggingRef.current) return;

    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const { scrollTop, scrollHeight, clientHeight } = scroller;
    const trackHeight = track.clientHeight;

    const maxScroll = Math.max(1, scrollHeight - clientHeight);
    const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));

    const h = minPiecePx + progress * (trackHeight - minPiecePx);
    setThumbHeightPx(h);
  }, []);

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
    const thumb = thumbRef.current;
    if (!track || !thumb) return;

    draggingRef.current = true;
    startYRef.current = e.clientY;
    startHRef.current =
      parseFloat(getComputedStyle(thumb).getPropertyValue('--thumb-h')) || minPiecePx;

    // отключаем анимацию на время drag
    const prevTransition = thumb.style.transition;
    thumb.style.transition = 'none';

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    const applyDrag = () => {
      rafDragRef.current = null;
      if (!draggingRef.current) return;

      const dy = lastClientYRef.current - startYRef.current;
      const trackHeight = track.clientHeight;

      const newH = clamp(startHRef.current + dy, minPiecePx, trackHeight);

      setThumbHeightPx(newH);
      setScrollFromThumbHeight(newH);
    };

    const onMove = (ev: PointerEvent) => {
      if (!draggingRef.current) return;

      lastClientYRef.current = ev.clientY;

      if (rafDragRef.current == null) {
        rafDragRef.current = requestAnimationFrame(applyDrag);
      }
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

      // возвращаем transition
      thumb.style.transition = prevTransition;

      // если кадр ещё висел — отменим
      if (rafDragRef.current != null) {
        cancelAnimationFrame(rafDragRef.current);
        rafDragRef.current = null;
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
  }, [recalc]);

  // чтобы реагировать на изменение высоты/контента/вьюпорта
  useLayoutEffect(() => {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const ro = new ResizeObserver(recalc);
    ro.observe(scroller);
    ro.observe(track);

    return () => ro.disconnect();
  }, [recalc]);

  return (
    <MainContentLayout className={className}>
      <FrameTitle>{title}</FrameTitle>
      <Content>
        <LeftChain />
        <Column ref={scrollRef}>{children}</Column>
        <RightChain>
          <ScrollTrack ref={trackRef}>
            <ScrollThumb ref={thumbRef}>
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

export const PositionedMainContent = styled(MainContent)`
  grid-column: col-start 1 / col-end 3;

  ${respond(
    'phone',
    css`
      grid-column: -1 / 1;
    `
  )}
`;
