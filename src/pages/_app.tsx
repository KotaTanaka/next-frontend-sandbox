import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'antd/dist/antd.css';
import Layout from '@/layout/Layout';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER_HOST}/graphql`,
  cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    console.log('[Page]', router.pathname);
  }, [router.pathname]);

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default App;
