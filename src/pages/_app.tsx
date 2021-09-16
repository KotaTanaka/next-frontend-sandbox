import 'tailwindcss/tailwind.css';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Layout from '@/layout/Layout';
import { apolloClient } from '@/utils/ApolloUtils';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
};

export default App;
