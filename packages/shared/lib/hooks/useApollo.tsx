import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';
export { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

loadDevMessages();
loadErrorMessages();
const client = new ApolloClient({
  uri: 'https://dev.base.intuition-api.com/v1/graphql',
  cache: new InMemoryCache(),
});

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
