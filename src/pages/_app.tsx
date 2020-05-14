import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER_HOST}/graphql`,
  fetch,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
