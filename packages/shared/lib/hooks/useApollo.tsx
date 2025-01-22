import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';
import { useApolloClient } from '@apollo/client';
export { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { base } from 'viem/chains';
import { useStorage } from './useStorage';
import { currentChainStorage } from '@extension/storage';
import { getTransactionEventsQuery } from '../queries';

loadDevMessages();
loadErrorMessages();

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const chainId = useStorage(currentChainStorage);
  const client = new ApolloClient({
    uri: `https://prod.${chainId === base.id ? 'base' : 'base-sepolia'}.intuition-api.com/v1/graphql`,
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

// TODO: remove hash conversion when the base chain is updated
export function useWaitForTransactionEvents() {
  const client = useApolloClient();
  const chainId = useStorage(currentChainStorage);
  return async (hash: string) => {
    let fixedHash = hash;
    if (chainId === base.id) {
      fixedHash = convertHash(hash);
    }
    const promise = new Promise(async (resolve, reject) => {
      while (true) {
        const { data, error } = await client.query({
          query: getTransactionEventsQuery,
          variables: { hash: fixedHash },
          fetchPolicy: 'network-only',
        });
        if (data?.events.length > 0) {
          return resolve(true);
        }
        if (error) {
          return reject(error);
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    });
    return promise;
  };
}

function convertHash(input: string): string {
  // Remove the "0x" prefix
  const hexString = input.startsWith('0x') ? input.slice(2) : input;

  // Convert each character in the string to its ASCII representation in hexadecimal
  const converted = [...hexString].map(char => `${char.charCodeAt(0).toString(16)}`).join('');

  return `\\x${converted}`;
}
