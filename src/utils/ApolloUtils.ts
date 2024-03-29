import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER_HOST}/graphql`,
  cache: new InMemoryCache(),
  ssrForceFetchDelay: 100,
});
