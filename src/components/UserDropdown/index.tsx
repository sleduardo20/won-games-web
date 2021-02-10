import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder,
} from '@styled-icons/material-outlined';
import { ChevronDown } from '@styled-icons/boxicons-regular';

import Link from 'next/link';
import Dropdown from '../Dropdown';

import { Nav, Option } from './styles';

export interface UserDropdownProps {
  username: string;
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          {username}
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

        <Link href="/whishlist" passHref>
          <Option title="Wishlist">
            <FavoriteBorder />
            <span>Wishlist</span>
          </Option>
        </Link>

        <Link href="/logout" passHref>
          <Option title="Sign out">
            <ExitToApp />
            <span>Sign out</span>
          </Option>
        </Link>
      </Nav>
    </Dropdown>
  );
};

export default UserDropdown;
