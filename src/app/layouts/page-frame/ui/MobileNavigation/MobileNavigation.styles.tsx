import styled from 'styled-components';

import { Chat } from '../../../../../widgets/Chat';
import { MarbleBackground } from '../../../../../shared/ui/backgrounds';

export const Container = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  pointer-events: ${(p) => (p.$isOpen ? 'auto' : 'none')};
`;

export const Sidebar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  right: 0;
  z-index: 6;

  width: 30rem;
  height: 100vh;
  padding: 2rem 1rem;

  ${MarbleBackground};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: translateX(${(p) => (p.$isOpen ? '0' : '100%')});
  transition: transform 250ms ease;
  will-change: transform;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;

  position: relative;
`;

export const CrossButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0;
  z-index: 7;

  background: none;
  border: none;
  cursor: pointer;

  padding: 1rem;
`;

export const MobileChat = styled(Chat)`
  background: var(--tertiary-color);
`;
