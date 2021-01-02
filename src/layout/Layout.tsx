import React from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import AppHeader from '@/components/partials/AppHeader';

/** 共通フレーム */
const Layout: React.FC = ({ children }) => {
  return (
    <div css={style.container}>
      <Head>
        <title>Books Management</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppHeader />
      {children}
    </div>
  );
};

export default Layout;

const style = {
  container: css`
    text-align: center;
  `,
};
