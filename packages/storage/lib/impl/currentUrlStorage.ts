import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type CurrentUrl = string | null;

type CurrentUrlStorage = BaseStorage<CurrentUrl>;

const storage = createStorage<CurrentUrl>('current-url-storage-key', null, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

export const currentUrlStorage: CurrentUrlStorage = {
  ...storage,
};
