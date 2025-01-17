export * from './shared-types';
export * from './viem';

export function shortId(id: string): string {
  const lower = id.toLowerCase();
  return lower.substring(0, 6) + '...' + lower.substring(id.length - 4);
}
