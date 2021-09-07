import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import Layout from '@/layout/Layout';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER_HOST}/graphql`,
  cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
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
