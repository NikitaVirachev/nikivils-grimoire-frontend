import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Frame from '../../styles/Frame';
import marbleTexture from '../../assets/img/textures/marble.gif';

const border = 0.5;

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  position: relative;
  padding: ${border + 0.2}rem;
  grid-column: -1 / 1;

  background: var(--tertiary-color);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: ${border}rem;
    pointer-events: none;

    background: url(${marbleTexture}) 0 0 / 5rem 5rem repeat;

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

const NavItem = styled(NavLink)`
  font-family: 'Metamorphous', serif;
  font-size: var(--small);
  color: var(--tertiary-color);

  height: 2.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    to bottom,
    var(--white-color),
    var(--grey-color) 28%,
    var(--grey-color) 68%,
    var(--secondary-bg-color)
  );

  ${Frame};
`;

const Navbar = () => (
  <Wrapper>
    <NavItem to='/'>Home</NavItem>
    <NavItem to='/about'>About</NavItem>
    <NavItem to='/blog'>Blog</NavItem>
    <NavItem to='/gallery'>Gallery</NavItem>
  </Wrapper>
);

export default Navbar;
