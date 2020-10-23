import { useState } from 'react';
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from 'styled-icons/material-outlined';

import MediaMath from '../MediaMath';
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

export interface MenuProps {
  username?: string;
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <MediaMath lessThan="medium">
        <IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </IconWrapper>
      </MediaMath>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMath greaterThan="medium">
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>
      </MediaMath>

      <MenuGroup>
        <IconWrapper>
          <ShoppingCartIcon aria-label="Open shopping Card" />
        </IconWrapper>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>

        {!username && (
          <MediaMath greaterThan="medium">
            <Button>Sign In</Button>
          </MediaMath>
        )}
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <CreateAccount title="Sign Up" href="#">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Container>
  );
};

export default Menu;
