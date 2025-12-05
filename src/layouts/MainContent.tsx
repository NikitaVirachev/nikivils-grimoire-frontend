import styled from 'styled-components';
import type { ReactNode } from 'react';

import { MarbleBackground } from '../styles/Backgrounds';

import mainBackgroundUrl from '../assets/img/backgrounds/main-background.jpg';

const MainContentLayout = styled.main`
  position: relative;
  padding: 0 0.5rem 2rem 0.5rem;

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

  background: center / cover no-repeat url(${mainBackgroundUrl});
  opacity: 0.1;
`;

interface MainContentProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const MainContent = ({ title, className, children }: MainContentProps) => {
  return (
    <MainContentLayout className={className}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </MainContentLayout>
  );
};

export default MainContent;
