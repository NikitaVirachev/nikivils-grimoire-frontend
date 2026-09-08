import type React from 'react';

import {
  Container,
  StyledCrescent,
  Title,
  StyledBlackSun,
  BurgerButton,
  StyledBurger,
} from './Header.styles';

type HeaderProps = {
  className?: string;
  toggleSidebar: () => void;
};

const Header = ({ className, toggleSidebar }: HeaderProps) => {
  const clickBurgerHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    toggleSidebar();
  };

  return (
    <Container className={className}>
      <StyledCrescent />
      <Title>The Grimoire of Nikivils</Title>
      <StyledBlackSun />
      <BurgerButton onClick={clickBurgerHandler}>
        <StyledBurger title='Burger menu button icon' />
      </BurgerButton>
    </Container>
  );
};

export default Header;
