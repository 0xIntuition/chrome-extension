import { StorageEnum } from '../base/enums';
import { createStorage } from '../base/base';
import type { BaseStorage } from '../base/types';

type CurrentTab = {
  tabId: number;
  url: string;
  title: string;
  image?: string;
  description: string;
  type: 'address' | 'caip10' | 'url';
} | null;

type CurrentTabStorage = BaseStorage<CurrentTab>;

const storage = createStorage<CurrentTab>('current-tab-storage-key', null, {
  storageEnum: StorageEnum.Local,
  liveUpdate: true,
});

export const currentTabStorage: CurrentTabStorage = {
  ...storage,
};
