import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { ReactNode } from 'react';

import { MarbleBackground } from '../styles/Backgrounds';
import Scull from '../components/Icon/Scull';

import mainBackgroundUrl from '../assets/img/backgrounds/main-background.jpg';

const MainContentLayout = styled.main`
  position: relative;
  padding: 0 0.5rem 2rem 0.5rem;

  min-height: 0;
  display: flex;
  flex-direction: column;

  background: var(--primarly-bg-color);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 0 0.5rem 2rem 0.5rem;
    pointer-events: none;

    ${MarbleBackground};

    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: var(--tertiary-color);
  line-height: 4rem;
  font-size: var(--h2);
  font-family: 'Uncial Antiqua', serif;
  ${MarbleBackground};
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
    background: center / cover no-repeat url(${mainBackgroundUrl});
    opacity: 0.1;
  }
`;

const LeftChain = styled.div`
  width: 2.4rem;
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
  background: rgba(255, 255, 255, 0.6);
  height: ${({ height }) => height}px;
  transition:
    height 80ms linear,
    top 80ms linear;
`;

const BigChunk = styled.div`
  height: 100rem;
`;

const StyledSkull = styled(Scull)`
  position: absolute;
  bottom: 0;
  z-index: 4;
`;

interface MainContentProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const MainContent = ({ title, className, children }: MainContentProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

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
      <Title>{title}</Title>
      <Content>
        <LeftChain />
        <Column ref={scrollRef}>
          <BigChunk />
          {children}
        </Column>
        <RightChain>
          <ScrollTrack ref={trackRef}>
            <ScrollThumb height={thumbHeight}>
              <StyledSkull title='Scull' />
            </ScrollThumb>
          </ScrollTrack>
        </RightChain>
      </Content>
    </MainContentLayout>
  );
};

export default MainContent;
