import { useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import type { ReactNode } from 'react';

import { FrameTitle } from '../../../../../shared/ui/frames';
import { respond } from '../../../../../shared/lib/styles';

import {
  MainContentLayout,
  Content,
  LeftChain,
  Column,
  RightChain,
  ScrollTrack,
  ScrollThumb,
  StyledSkull,
} from './MainContent.styles';

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
