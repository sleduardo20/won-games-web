import { useState } from 'react';
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from 'styled-icons/material-outlined';

import Logo from '../Logo';
import {
  Container,
  IconWrapper,
  LogoWrapper,
  MenuGroup,
  MenuFull,
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
      </MenuFull>
    </Container>
  );
};

export default Menu;
