import React from 'react';
import { CSSProperties, useState } from 'react';
import Link from 'next/link';
import { Menu, Button } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { PAGE_URL } from '@/constants';

/** ヘッダー */
const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /** メニューの開閉 */
  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-center">
      <div className="absolute top-2 left-2">
        <Button type="primary" onClick={handleClickMenu}>
          <MenuOutlined />
        </Button>
      </div>
      {isMenuOpen && (
        <Menu theme="dark" style={menuStyle}>
          <Menu.Item key={PAGE_URL.HOME}>
            <HomeOutlined />
            <Link href={PAGE_URL.HOME}>
              <a className="cursor-pointer m-4">Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={PAGE_URL.ABOUT}>
            <InfoCircleOutlined />
            <Link href={PAGE_URL.ABOUT}>
              <a className="cursor-pointer m-4">About Page</a>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default AppHeader;

const menuStyle: CSSProperties = {
  position: 'absolute',
  top: 44,
  left: 8,
  textAlign: 'left',
};
