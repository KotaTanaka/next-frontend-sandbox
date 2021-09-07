import Head from 'next/head';

import AppHeader from '@/components/partials/AppHeader';

/** 共通フレーム */
const Layout: React.FC = ({ children }) => {
  return (
    <div className="text-center">
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
