export { type Address, formatEther, parseEther, isAddress, type Chain, type Hex, toHex } from 'viem';

import { Address, createPublicClient, defineChain, http } from 'viem';
import { base, baseSepolia, mainnet, polygon, arbitrum, sepolia, linea, lineaSepolia, Chain } from 'viem/chains';
export { base, baseSepolia, mainnet, linea };
// Initialize a client for the Ethereum mainnet
export const supportedChains = [base, baseSepolia, mainnet, polygon, arbitrum, sepolia, linea, lineaSepolia];

export const intuitionTestnet = defineChain({
  id: 13579,
  name: 'Intuition testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Test Trust',
    symbol: 'tTRUST',
  },
  rpcUrls: {
    default: { http: ['https://testnet.rpc.intuition.systems/http'] },
  },
  blockExplorers: {
    default: {
      name: 'Intuition Explorer',
      url: 'https://testnet.explorer.intuition.systems',
    },
  },
  contracts: {
    multicall3: {
      address: '0x66bf587EdFbd5408121bDb125a1B6F9b830F64AD',
    },
  },
});

// Function to check if an address is an EOA or a smart contract
export async function isSmartContract(address: Address, chain: Chain) {
  const client = createPublicClient({
    chain,
    transport: http(),
  });

  const code = await client.request({
    method: 'eth_getCode',
    params: [address, 'latest'],
  });

  if (code === '0x' || code === '0x0') {
    return false;
  } else {
    return true;
  }
}
