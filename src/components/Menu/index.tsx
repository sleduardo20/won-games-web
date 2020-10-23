import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
} from 'styled-icons/material-outlined';

import Logo from '../Logo';
import { Container, IconWrapper, LogoWrapper, MenuGroup } from './styles';

const Menu = () => {
  return (
    <Container>
      <IconWrapper>
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
    </Container>
  );
};

export default Menu;
