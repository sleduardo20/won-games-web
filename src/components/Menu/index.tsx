import { useState } from 'react';
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from 'styled-icons/material-outlined';

import Button from '../Button';
import Logo from '../Logo';

import {
  Container,
  IconWrapper,
  LogoWrapper,
  MenuGroup,
  MenuNav,
  MenuLink,
  MenuFull,
  RegisterBox,
  CreateAccount,
} from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </IconWrapper>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MenuGroup>
        <IconWrapper>
          <ShoppingCartIcon aria-label="Open shopping Card" />
        </IconWrapper>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>

        <RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <CreateAccount title="Sign Up" href="#">
            Sign Up
          </CreateAccount>
        </RegisterBox>
      </MenuFull>
    </Container>
  );
};

export default Menu;
