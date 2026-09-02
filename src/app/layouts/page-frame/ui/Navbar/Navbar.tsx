import NavigationLink from '../NavigationLink/NavigationLink';

import { Wrapper, List } from './Navbar.styles';

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => (
  <Wrapper className={className}>
    <List>
      <li>
        <NavigationLink to='/'>Home</NavigationLink>
      </li>
      <li>
        <NavigationLink to='/about'>About</NavigationLink>
      </li>
      <li>
        <NavigationLink to='/blog'>Blog</NavigationLink>
      </li>
      <li>
        <NavigationLink to='/gallery'>Gallery</NavigationLink>
      </li>
    </List>
  </Wrapper>
);

export default Navbar;
