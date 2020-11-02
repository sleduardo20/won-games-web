import Link from 'next/link';
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
            <Link href="/sign-in" passHref>
              <Button as="a">Sign In</Button>
            </Link>
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
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign In
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <CreateAccount title="Sign Up">Sign Up</CreateAccount>
            </Link>
          </RegisterBox>
        )}
      </MenuFull>
    </Container>
  );
};

export default Menu;
