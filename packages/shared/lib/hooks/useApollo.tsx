import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';
export { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { base } from 'viem/chains';
import { useStorage } from './useStorage';
import { currentChainStorage } from '@extension/storage';

loadDevMessages();
loadErrorMessages();
const client = new ApolloClient({
  uri: 'https://dev.base.intuition-api.com/v1/graphql',
  cache: new InMemoryCache(),
});

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const chainId = useStorage(currentChainStorage);
  const client = new ApolloClient({
    uri: `https://dev.${chainId === base.id ? 'base' : 'base-sepolia'}.intuition-api.com/v1/graphql`,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
