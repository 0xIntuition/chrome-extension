import { useEffect, useState } from 'react';
import { Multivault, deployments } from '@0xintuition/protocol';
import { createPublicClient, createWalletClient, custom, http, WalletClient } from 'viem';
import { base, baseSepolia } from 'viem/chains';
import createMetaMaskProvider from 'metamask-extension-provider';
import { currentChainStorage } from '@extension/storage';
import { useStorage } from './useStorage';

// Create a public client for interacting with the blockchain (waiting for transaction receipts)
export function useMultiVault(account?: `0x${string}`) {
  const [client, setClient] = useState<WalletClient | undefined>(undefined);
  const chainId = useStorage(currentChainStorage);

  useEffect(() => {
    const client = createWalletClient({
      chain: chainId === base.id ? base : baseSepolia, // Use the Base chain
      account,
      transport: custom(createMetaMaskProvider()),
    });
    // client.switchChain({ id: base.id });
    // client.addChain({ chain: base });

    setClient(client);
  }, [account]);

  const publicClient = createPublicClient({
    chain: chainId === base.id ? base : baseSepolia, // Use the Base chain
    transport: http(), // Use HTTP transport for communication
  });

  const multivault = new Multivault(
    {
      // @ts-ignore
      publicClient,
      // @ts-ignore
      walletClient: client,
    },
    deployments[chainId],
  );

  return { multivault, client };
}
