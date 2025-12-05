import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PrimarlyFrame, SecondaryFrame } from '../../styles/Frame';
import marbleTexture from '../../assets/img/textures/marble.gif';

const border = 0.5;

const Wrapper = styled.nav`
  grid-column: -1 / 1;

  position: relative;
  padding: ${border + 0.2}rem;

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

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  list-style-type: none;
`;

const NavItem = styled(NavLink)`
  font-family: 'Metamorphous', serif;
  font-size: var(--small);
  color: var(--tertiary-color);
  text-decoration: none;

  height: 2.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background:
    linear-gradient(
      to bottom,
      color-mix(in srgb, var(--white-color) 50%, transparent),
      color-mix(in srgb, var(--grey-color) 50%, transparent) 28%,
      color-mix(in srgb, var(--grey-color) 50%, transparent) 68%,
      color-mix(in srgb, var(--secondary-bg-color) 50%, transparent)
    ),
    var(--secondary-bg-color);

  ${SecondaryFrame};

  &:hover:not(.active) {
    filter: drop-shadow(0 0 0.7rem var(--secondary-color));
  }

  &.active {
    background:
      linear-gradient(
        to bottom,
        color-mix(in srgb, var(--white-color) 50%, transparent),
        color-mix(in srgb, var(--grey-color) 50%, transparent) 28%,
        color-mix(in srgb, var(--grey-color) 50%, transparent) 68%,
        color-mix(in srgb, var(--secondary-bg-color) 50%, transparent)
      ),
      var(--tertiary-color);

    ${PrimarlyFrame};

    color: var(--secondary-tp-color);
    text-shadow: 0 0 0.2rem var(--primarly-tp-color);
  }
`;

const Navbar = () => (
  <Wrapper>
    <List>
      <li>
        <NavItem to='/'>Home</NavItem>
      </li>
      <li>
        <NavItem to='/about'>About</NavItem>
      </li>
      <li>
        <NavItem to='/blog'>Blog</NavItem>
      </li>
      <li>
        <NavItem to='/gallery'>Gallery</NavItem>
      </li>
    </List>
  </Wrapper>
);

export default Navbar;
