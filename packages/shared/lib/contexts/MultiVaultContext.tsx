import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Multivault, deployments } from '@0xintuition/protocol';
import { createPublicClient, createWalletClient, custom, http, WalletClient } from 'viem';
import { base, baseSepolia } from 'viem/chains';
import createMetaMaskProvider from 'metamask-extension-provider';
import { currentChainStorage, currentAccountStorage } from '@extension/storage';
import { useStorage } from '../hooks/useStorage';

type MultiVaultContextType = {
  multivault: Multivault;
  client: WalletClient | undefined;
};

const MultiVaultContext = createContext<MultiVaultContextType | undefined>(undefined);

export function MultiVaultProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<WalletClient | undefined>(undefined);
  const chainId = useStorage(currentChainStorage);
  const account = useStorage(currentAccountStorage);

  useEffect(() => {
    console.log('creating client', { chainId, account });
    const client = createWalletClient({
      chain: chainId === base.id ? base : baseSepolia,
      account,
      transport: custom(createMetaMaskProvider()),
    });

    setClient(client);
  }, [account]);

  const publicClient = createPublicClient({
    chain: chainId === base.id ? base : baseSepolia,
    transport: http(),
  });

  const multivault = new Multivault(
    {
      publicClient,
      walletClient: client,
    } as any,
    deployments[chainId],
  );

  return <MultiVaultContext.Provider value={{ multivault, client }}>{children}</MultiVaultContext.Provider>;
}

export function useMultiVault() {
  const context = useContext(MultiVaultContext);
  if (!context) {
    throw new Error('useMultiVault must be used within a MultiVaultProvider');
  }
  return context;
}
