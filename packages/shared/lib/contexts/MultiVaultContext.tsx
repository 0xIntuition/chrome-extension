import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from 'react';
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
  const chainId = useStorage(currentChainStorage);
  const account = useStorage(currentAccountStorage);
  const client = useMemo(() => {
    return createWalletClient({
      chain: chainId === base.id ? base : baseSepolia,
      account,
      transport: custom(createMetaMaskProvider()),
    });
  }, [account, chainId]);
  // if chainId changes, we need to switch the chain
  useEffect(() => {
    if (chainId) {
      console.log('switching chain', { chainId });
      client?.switchChain({ id: chainId });
    }
  }, [chainId, client]);

  const publicClient = useMemo(() => {
    return createPublicClient({
      chain: chainId === base.id ? base : baseSepolia,
      transport: http(),
    });
  }, [chainId]);

  const multivault = useMemo(() => {
    return new Multivault(
      {
        publicClient,
        walletClient: client,
      } as any,
      deployments[chainId],
    );
  }, [chainId, client, publicClient]);

  return <MultiVaultContext.Provider value={{ multivault, client }}>{children}</MultiVaultContext.Provider>;
}

export function useMultiVault() {
  const context = useContext(MultiVaultContext);
  if (!context) {
    throw new Error('useMultiVault must be used within a MultiVaultProvider');
  }
  return context;
}
