import { createContext, useContext, ReactNode, useState, useEffect, useMemo } from 'react';
import {
  createPublicClient,
  createWalletClient,
  custom,
  getContract,
  http,
  WalletClient,
  GetContractReturnType,
  PublicClient,
  Address,
  Account,
  Transport,
  Chain,
} from 'viem';
import createMetaMaskProvider from 'metamask-extension-provider';
import { currentChainStorage, currentAccountStorage } from '@extension/storage';
import { useStorage } from '../hooks/useStorage';
import { intuitionTestnet } from '../utils/viem';
import { abi } from './abi';

type MultiVaultContract = GetContractReturnType<
  typeof abi,
  { public: PublicClient; wallet: WalletClient<Transport, Chain, Account> },
  Address
>;

type MultiVaultContextType = {
  multivault: MultiVaultContract;
  client: WalletClient | undefined;
};

const MultiVaultContext = createContext<MultiVaultContextType | undefined>(undefined);

export function MultiVaultProvider({ children }: { children: ReactNode }) {
  const chainId = useStorage(currentChainStorage);
  const account = useStorage(currentAccountStorage);
  const client = useMemo(() => {
    return createWalletClient({
      // FIXME when mainnet is available
      chain: chainId === intuitionTestnet.id ? intuitionTestnet : intuitionTestnet,
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
      // FIXME when mainnet is available
      chain: chainId === intuitionTestnet.id ? intuitionTestnet : intuitionTestnet,
      transport: http(),
    });
  }, [chainId]);

  const multivault: MultiVaultContract = useMemo(() => {
    return getContract({
      address: '0xB92EA1B47E4ABD0a520E9138BB59dBd1bC6C475B',
      abi,
      client: { public: publicClient, wallet: client },
    });
  }, [chainId, client, publicClient]) as any as MultiVaultContract;

  return <MultiVaultContext.Provider value={{ multivault, client }}>{children}</MultiVaultContext.Provider>;
}

export function useMultiVault() {
  const context = useContext(MultiVaultContext);
  if (!context) {
    throw new Error('useMultiVault must be used within a MultiVaultProvider');
  }
  return context;
}
