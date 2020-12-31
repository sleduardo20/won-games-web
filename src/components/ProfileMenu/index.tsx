import Link from 'next/link';
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';

import { Nav, ItemLink } from './styles';

export interface ProfileMenuProps {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders';
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <Nav>
      <Link href="/profile/me" passHref>
        <ItemLink isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </ItemLink>
      </Link>
      <Link href="/profile/cards" passHref>
        <ItemLink isActive={activeLink === '/profile/cards'} title="My cards">
          <CreditCard size={24} />
          <span>My cards</span>
        </ItemLink>
      </Link>
      <Link href="/profile/orders" passHref>
        <ItemLink isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </ItemLink>
      </Link>
      <Link href="/logout" passHref>
        <ItemLink>
          <ExitToApp size={24} />
          <span>Sign Out</span>
        </ItemLink>
      </Link>
    </Nav>
  );
};

export default ProfileMenu;
