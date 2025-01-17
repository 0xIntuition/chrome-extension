export { type Address, formatEther, parseEther, isAddress, type Chain } from 'viem';

import { Address, createPublicClient, http } from 'viem';
import { base, baseSepolia, mainnet, polygon, arbitrum, sepolia, linea, lineaSepolia, Chain } from 'viem/chains';
export { base, baseSepolia, mainnet, linea };
// Initialize a client for the Ethereum mainnet
export const supportedChains = [base, baseSepolia, mainnet, polygon, arbitrum, sepolia, linea, lineaSepolia];

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
