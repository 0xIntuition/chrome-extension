import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type ChainId = number;

type ChainStorage = BaseStorage<ChainId>;

const storage = createStorage<ChainId>('chain-storage-key', 8453, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

// You can extend it with your own methods
export const currentChainStorage: ChainStorage = {
  ...storage,
};
