import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type Account = `0x${string}` | null;

type AccountStorage = BaseStorage<Account>;

const storage = createStorage<Account>('account-storage-key', null, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

// You can extend it with your own methods
export const currentAccountStorage: AccountStorage = {
  ...storage,
};
