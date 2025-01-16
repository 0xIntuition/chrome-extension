import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type Account = `0x${string}` | undefined;

type AccountStorage = BaseStorage<Account>;

const storage = createStorage<Account>('account-storage-key', undefined, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

// You can extend it with your own methods
export const currentAccountStorage: AccountStorage = {
  ...storage,
};
