import { useRouter } from 'next/router';
import React from 'react';
import { HamburgerIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from '@chakra-ui/react';
import { PAGE_URL } from '@/constants';

/** ヘッダー */
const AppHeader: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex fixed top-0 left-0 items-center w-full">
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} margin="2" />
        <MenuList>
          <MenuItem
            icon={<TimeIcon />}
            onClick={() => router.push(PAGE_URL.HOME)}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<InfoIcon />}
            onClick={() => router.push(PAGE_URL.ABOUT)}
          >
            About Page
          </MenuItem>
        </MenuList>
      </Menu>
      <div>本棚管理</div>
    </div>
  );
};

export default AppHeader;
