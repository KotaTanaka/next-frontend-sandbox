import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER_HOST}/graphql`,
  fetch,
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    console.log('[Page]', router.pathname);
  }, [router.pathname]);

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default App;
