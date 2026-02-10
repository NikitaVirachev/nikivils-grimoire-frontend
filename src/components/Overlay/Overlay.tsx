import styled from 'styled-components';

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-bg-color);
  opacity: 50%;

  opacity: ${(p) => (p.$isOpen ? '50%' : 0)};
  transition: opacity 250ms ease;
  pointer-events: ${(p) => (p.$isOpen ? 'auto' : 'none')};
`;

export default Overlay;
