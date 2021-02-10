import { AccountCircle } from '@styled-icons/material-outlined';
import { ChevronDown } from '@styled-icons/boxicons-regular';

import Dropdown from '../Dropdown';

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
      content
    </Dropdown>
  );
};

export default UserDropdown;
