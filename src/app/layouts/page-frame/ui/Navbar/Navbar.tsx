import NavItem from '../../../../../widgets/navbar/NavItem';

import { Wrapper, List } from './Navbar.styles';

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => (
  <Wrapper className={className}>
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
