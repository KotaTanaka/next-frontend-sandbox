import React from 'react';
import { CSSProperties, useState } from 'react';
import Link from 'next/link';
import { Menu, Button } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { PAGE_URL } from '@/constants';

/** ヘッダー */
const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /** メニューの開閉 */
  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div css={style.container}>
      <div css={style.menuButtonWrapper}>
        <Button type="primary" onClick={handleClickMenu}>
          <MenuOutlined />
        </Button>
      </div>
      {isMenuOpen && (
        <Menu theme="dark" style={menuStyle}>
          <Menu.Item key={PAGE_URL.HOME}>
            <HomeOutlined />
            <Link href={PAGE_URL.HOME}>
              <a css={style.link}>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={PAGE_URL.ABOUT}>
            <InfoCircleOutlined />
            <Link href={PAGE_URL.ABOUT}>
              <a css={style.link}>About Page</a>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default AppHeader;

const style = {
  container: css`
    text-align: center;
  `,
  menuButtonWrapper: css`
    position: absolute;
    top: 8px;
    left: 8px;
  `,
  link: css`
    cursor: pointer;
    margin: 16px;
  `,
};
const menuStyle: CSSProperties = {
  position: 'absolute',
  top: 44,
  left: 8,
  textAlign: 'left',
};
