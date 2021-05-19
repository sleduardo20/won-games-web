import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';

import { Nav, ItemLink } from './styles';

export interface ProfileMenuProps {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter();
  return (
    <Nav>
      <Link href="/profile/me" passHref>
        <ItemLink isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </ItemLink>
      </Link>

      <Link href="/profile/orders" passHref>
        <ItemLink isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </ItemLink>
      </Link>

      <ItemLink
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' });

          push(data.url);
        }}
      >
        <ExitToApp size={24} />
        <span>Sign Out</span>
      </ItemLink>
    </Nav>
  );
};

export default ProfileMenu;
