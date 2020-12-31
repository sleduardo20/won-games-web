import Link from 'next/link';
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';
import { Nav, ItemLink } from './styles';

const ProfileMenu = () => {
  return (
    <Nav>
      <Link href="/profile/me" passHref>
        <ItemLink>
          <AccountCircle size={24} />
          <span>My profile</span>
        </ItemLink>
      </Link>
      <Link href="/profile/cards" passHref>
        <ItemLink>
          <CreditCard size={24} />
          <span>My cards</span>
        </ItemLink>
      </Link>
      <Link href="/profile/orders" passHref>
        <ItemLink>
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </ItemLink>
      </Link>
      <Link href="/profile/me" passHref>
        <ItemLink>
          <ExitToApp size={24} />
          <span>Sign Out</span>
        </ItemLink>
      </Link>
    </Nav>
  );
};

export default ProfileMenu;
