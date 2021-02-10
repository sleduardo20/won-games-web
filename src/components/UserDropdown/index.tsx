import { AccountCircle } from '@styled-icons/material-outlined';

import Dropdown from '../Dropdown';

export interface UserDropdownProps {
  username: string;
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  return <Dropdown title={username}>content</Dropdown>;
};

export default UserDropdown;
