import { useEffect, useState } from 'react';
import { Multivault } from '@0xintuition/protocol';
import { createPublicClient, createWalletClient, custom, http, WalletClient } from 'viem';
import { base } from 'viem/chains';
import createMetaMaskProvider from 'metamask-extension-provider';

export { base };

// Create a public client for interacting with the blockchain (waiting for transaction receipts)
export const publicClient = createPublicClient({
  chain: base, // Use the Base chain
  transport: http(), // Use HTTP transport for communication
});

export function useMultiVault(account?: `0x${string}`) {
  const [client, setClient] = useState<WalletClient | undefined>(undefined);

  useEffect(() => {
    const client = createWalletClient({
      chain: base, // Use the Base chain
      account,
      transport: custom(createMetaMaskProvider()),
    });
    // client.switchChain({ id: base.id });
    // client.addChain({ chain: base });

    setClient(client);
  }, [account]);

  const multivault = new Multivault({
    // @ts-ignore
    publicClient,
    // @ts-ignore
    walletClient: client,
  });

  return { multivault, client };
}
