import NavigationLink from '../NavigationLink/NavigationLink';
import BlackSun from '../Header/BlackSun';
import { Overlay } from '@/shared/ui/overlay';
import { Cross } from '@/shared/ui/icons';
import {
  Container,
  Sidebar,
  CrossButton,
  List,
  Header,
  MobileChat,
} from './MobileNavigation.styles';

type MobileNavigationProps = {
  className?: string;
  toggle: () => void;
  isOpen: boolean;
};

const MobileNavigation = ({ className, toggle, isOpen }: MobileNavigationProps) => {
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
            <NavigationLink
              to='/'
              $size='big'
              onClick={() => toggle()}
            >
              Home
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              to='/about'
              $size='big'
              onClick={() => toggle()}
            >
              About
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              to='/blog'
              $size='big'
              onClick={() => toggle()}
            >
              Blog
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              to='/gallery'
              $size='big'
              onClick={() => toggle()}
            >
              Gallery
            </NavigationLink>
          </li>
        </List>

        {isOpen && <MobileChat />}
      </Sidebar>
    </Container>
  );
};

export default MobileNavigation;
