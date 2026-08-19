import styled from 'styled-components';

import Overlay from '../Overlay/Overlay';
import { MarbleBackground } from '../../styles/Backgrounds';
import NavItem from '../Navbar/NavItem';
import BlackSun from '../Header/BlackSun';
import Cross from '../Icon/Cross';
import Chat from '../Chat/Chat';

const Container = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  pointer-events: ${(p) => (p.$isOpen ? 'auto' : 'none')};
`;

const Sidebar = styled.aside<{ $isOpen: boolean }>`
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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
`;

const Header = styled.h2`
  display: flex;
  justify-content: center;

  position: relative;
`;

const CrossButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0;
  z-index: 7;

  background: none;
  border: none;
  cursor: pointer;

  padding: 1rem;
`;

const OffCanvasChat = styled(Chat)`
  background: var(--tertiary-color);
`;

type OffCanvas = {
  className?: string;
  toggle: () => void;
  isOpen: boolean;
};

const OffCanvas = ({ className, toggle, isOpen }: OffCanvas) => {
  const clickCrossButtonHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    toggle();
  };

  return (
    <Container
      className={className}
      $isOpen={isOpen}
    >
      <Overlay $isOpen={isOpen} />
      <Sidebar $isOpen={isOpen}>
        <CrossButton onClick={clickCrossButtonHandler}>
          <Cross title='Cross button icon' />
        </CrossButton>

        <List>
          <li>
            <Header>
              <BlackSun isOpen />
            </Header>
          </li>
          <li>
            <NavItem
              to='/'
              $size='big'
              onClick={() => toggle()}
            >
              Home
            </NavItem>
          </li>
          <li>
            <NavItem
              to='/about'
              $size='big'
              onClick={() => toggle()}
            >
              About
            </NavItem>
          </li>
          <li>
            <NavItem
              to='/blog'
              $size='big'
              onClick={() => toggle()}
            >
              Blog
            </NavItem>
          </li>
          <li>
            <NavItem
              to='/gallery'
              $size='big'
              onClick={() => toggle()}
            >
              Gallery
            </NavItem>
          </li>
        </List>

        {isOpen && <OffCanvasChat />}
      </Sidebar>
    </Container>
  );
};

export default OffCanvas;
