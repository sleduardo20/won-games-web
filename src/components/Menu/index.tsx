import Link from 'next/link';
import { useState } from 'react';
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import {
  Search as SearchIcon,
  Close as CloseIcon,
} from 'styled-icons/material-outlined';

import UserDropdown from '../UserDropdown';
import CartDropdown from '../CartDropdown';
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
  username?: string | null;
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
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </LogoWrapper>

      <MediaMath greaterThan="medium">
        <MenuNav>
          <Link href="/" passHref>
            <MenuLink>Home</MenuLink>
          </Link>
          <Link href="/games" passHref>
            <MenuLink>Explore</MenuLink>
          </Link>
        </MenuNav>
      </MediaMath>

      <MenuGroup>
        <IconWrapper>
          <MediaMath greaterThan="medium">
            <CartDropdown />
          </MediaMath>

          <MediaMath lessThan="medium">
            <Link href="/cart" passHref>
              <a>
                <CartDropdown />
              </a>
            </Link>
          </MediaMath>
        </IconWrapper>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>

        <MediaMath greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Sign In</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMath>
      </MenuGroup>

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <MenuNav>
          <Link href="/" passHref>
            <MenuLink>Home</MenuLink>
          </Link>

          <Link href="/games" passHref>
            <MenuLink>Explore</MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <MenuLink>My profile</MenuLink>
              </Link>

              <Link href="/wishlist" passHref>
                <MenuLink>Wishlist</MenuLink>
              </Link>
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
