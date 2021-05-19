import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder,
} from '@styled-icons/material-outlined';
import { ChevronDown } from '@styled-icons/boxicons-regular';
import { signOut } from 'next-auth/client';

import Dropdown from '../Dropdown';

import { Nav, Option, UserName } from './styles';

export interface UserDropdownProps {
  username: string;
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  const { push } = useRouter();

  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <UserName>{username}</UserName>
          <ChevronDown size={24} />
        </>
      }
    >
      <Nav>
        <Link href="/profile/me" passHref>
          <Option>
            <AccountCircle />
            <span>My profile</span>
          </Option>
        </Link>

        <Link href="/wishlist" passHref>
          <Option title="Wishlist">
            <FavoriteBorder />
            <span>Wishlist</span>
          </Option>
        </Link>

        <Option
          role="button"
          title="Sign out"
          onClick={async () => {
            const data = await signOut({ redirect: false, callbackUrl: '/' });

            push(data.url);
          }}
        >
          <ExitToApp />
          <span>Sign out</span>
        </Option>
      </Nav>
    </Dropdown>
  );
};

export default UserDropdown;
