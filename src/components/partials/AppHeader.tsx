import { NextComponentType } from 'next';
import { CSSProperties, useState } from 'react';
import Link from 'next/link';
import { Menu, Button } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { PAGE_URL } from '@/constants';

/** ヘッダー */
const AppHeader: NextComponentType = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /** メニューの開閉 */
  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <MenuButton type="primary" onClick={handleClickMenu}>
        <MenuOutlined />
      </MenuButton>
      {isMenuOpen && (
        <Menu theme="dark" style={menuStyle}>
          <Menu.Item key={PAGE_URL.HOME}>
            <HomeOutlined />
            <Link href={PAGE_URL.HOME}>
              <LinkText>Home</LinkText>
            </Link>
          </Menu.Item>
          <Menu.Item key={PAGE_URL.ABOUT}>
            <InfoCircleOutlined />
            <Link href={PAGE_URL.ABOUT}>
              <LinkText>About Page</LinkText>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </Container>
  );
};

export default AppHeader;

// style
const Container = styled.div`
  text-align: center;
`;
const MenuButton = styled(Button)`
  position: absolute;
  top: 8px;
  left: 8px;
`;
const LinkText = styled.a`
  cursor: pointer;
  margin: 16px;
`;
const menuStyle: CSSProperties = {
  position: 'absolute',
  top: 44,
  left: 8,
  textAlign: 'left',
};
